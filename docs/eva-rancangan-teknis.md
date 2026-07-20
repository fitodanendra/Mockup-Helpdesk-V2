# EVA — Rancangan Teknis: Dari Mockup ke Sistem Nyata

**Status dokumen:** draf untuk review
**Ruang lingkup:** EVA Knowledge Admin Console (`/eva`) dan asisten virtual EVA
**Terakhir diperbarui:** 20 Juli 2026

---

## 1. Tujuan dokumen

Mockup di `/eva` sudah menunjukkan **alur kerja** EVA secara lengkap — bagaimana pengetahuan dikelola, ditinjau, dipublikasikan, dinilai, dan diperbaiki. Yang belum ditunjukkan adalah **mesin di baliknya**.

Dokumen ini memisahkan keduanya secara jujur: mana yang sudah benar-benar berfungsi di mockup, mana yang disimulasikan, dan apa yang dibutuhkan supaya EVA bekerja sungguhan di lingkungan ADHI Karya.

Dokumen ini **bukan** rencana proyek. Estimasi fase di bagian 5 adalah urutan prioritas, bukan komitmen jadwal.

---

## 2. Yang sudah ada vs. yang disimulasikan

| Bagian | Di mockup | Kenyataannya |
|---|---|---|
| Alur artikel (draft → review → publish) | **Berfungsi penuh** | Tinggal disambungkan ke database |
| Pertanyaan tak terjawab → artikel/FAQ | **Berfungsi penuh** | Prefill editor sudah benar |
| Rekomendasi tipe tiket | **Berfungsi penuh** | 11 aturan keyword, first-match-wins |
| Rating & feedback | **Berfungsi penuh** | Data terkumpul, tapi belum dipakai apa-apa |
| Kutipan sumber & skor keyakinan | **Berfungsi** (baru) | Skor dihitung dari kecocokan kata kunci, bukan makna |
| Pertanyaan klarifikasi | **Berfungsi** (baru) | Daftar keluhan generik masih hardcoded |
| **Pencarian jawaban** | **Disimulasikan** | `includes()` ke 5 entri hardcoded |
| **Indexing dokumen** | **Disimulasikan** | Status `Processing → Indexed` pakai `setTimeout` |
| **Pembuatan tiket** | **Disimulasikan** | Nomor tiket dikarang di frontend |
| **Identitas penanya** | **Tidak ada** | EVA tidak tahu siapa yang bertanya |

Poin penting untuk reviewer: **alur kerjanya sudah matang, mesin pencarinya belum ada.** Itu pembagian kerja yang wajar untuk tahap mockup, tapi perlu disadari agar ekspektasi tidak melenceng.

---

## 3. Celah teknis utama

### 3.1 Pencarian jawaban — dari kata kunci ke makna

Logika sekarang, disederhanakan:

```js
evaAnswer(text){
  const q = text.toLowerCase();
  for (const e of this.evaKb) {
    const hits = e.kw.filter(k => q.includes(k.trim()));
    // ...skor dari jumlah & panjang kata kunci yang cocok
  }
}
```

Ini **pencocokan substring**, bukan pemahaman makna. Konsekuensinya:

- Pertanyaan yang tidak memakai kata kunci persis → tidak ketemu, walaupun maksudnya sama
- Menambah cakupan berarti menambah kata kunci manual, selamanya
- Tidak ada cara mengukur "seberapa mirip" dua pertanyaan

Sementara itu fitur **Documents** sudah memakai bahasa RAG — dokumen dipecah jadi *chunk* (58 halaman → 210 chunk). Tapi tidak ada retrieval yang benar-benar memakai chunk itu. **Ada ketidaksinkronan antara janji UI dan logika di baliknya**, dan ini celah nomor satu.

**Yang dibutuhkan:**

1. **Embedding** untuk tiap artikel, FAQ, dan chunk dokumen — ubah teks jadi vektor
2. **Vector store** untuk pencarian kemiripan (pgvector, Qdrant, atau Elasticsearch dense vector)
3. **Hybrid search** — gabungkan skor semantik dengan keyword/BM25. Kata kunci tetap berguna untuk istilah spesifik seperti `ME22N` atau `FortiClient` yang tidak punya makna umum
4. **Re-ranking** hasil teratas sebelum disajikan

Trigger phrases yang sudah ada di Editor tetap berguna — jadi contoh positif untuk mengevaluasi kualitas retrieval.

### 3.2 Penanganan Bahasa Indonesia

Ini sering diremehkan tapi menentukan. Contoh nyata dari data mockup sendiri: `"sap gui lemot banget"`, `"ganti hp mfa gimana reset"`, `"buka elisa kontrak lewat hp"`.

Yang perlu ditangani:

- **Stemming** — "memperpanjang" / "diperpanjang" / "perpanjangan" harus mengarah ke akar yang sama. Sastrawi adalah pustaka standar untuk ini
- **Bahasa informal** — "lemot", "gabisa", "gimana", "hp" tidak ada di kamus formal
- **Campur kode** — karyawan menulis "reset password" bukan "atur ulang kata sandi". Model embedding harus multilingual
- **Typo** — toleransi jarak edit untuk kesalahan ketik umum

Fitur **Sinonim** di Search Settings sudah menangani sebagian kecil masalah ini secara manual (`password → sandi, kata sandi, pw`), tapi tidak mungkin diskalakan dengan tangan.

### 3.3 Ambang keyakinan

Sudah diimplementasikan di mockup dengan tiga band:

| Keyakinan | Perilaku |
|---|---|
| ≥ 80% | Jawab langsung |
| 55–79% | Jawab + "Apakah ini yang Anda maksud?" |
| < 55% | Jangan menebak — tawarkan tiket |

Yang perlu diubah di sistem nyata: skornya harus berasal dari **jarak vektor + skor re-ranker**, bukan hitungan kata kunci. Ambangnya sendiri harus **dikalibrasi dari data nyata**, bukan ditetapkan di awal — jalankan pada beberapa ratus pertanyaan riil, lihat di titik mana jawaban mulai sering salah.

Prinsip yang perlu dipegang: **kegagalan paling merusak bukan "EVA tidak tahu", tapi "EVA menjawab dengan yakin tapi salah".** Lebih baik ambang terlalu tinggi di awal.

### 3.4 Identitas dan konteks penanya

Saat ini `evaSend()` tidak membawa identitas sama sekali. Ini menutup sebagian besar kasus penggunaan yang justru paling bernilai:

- **"Status tiket saya bagaimana?"** — kemungkinan besar pertanyaan paling sering, dan sekarang mustahil dijawab
- "Saya tidak bisa akses ELISA" — EVA tidak tahu user ini memang belum punya lisensi
- Karyawan Finance dan karyawan Site Office menerima jawaban identik untuk konteks yang berbeda

**Yang dibutuhkan:** sesi EVA membawa konteks dari SSO — NIK, departemen, lokasi kerja, daftar aplikasi yang dia punya akses, dan tiket terbukanya.

**Catatan keamanan:** begitu EVA tahu identitas, ia harus menghormati otorisasi. Artikel internal SCM tidak boleh muncul ke semua orang hanya karena cocok secara semantik. Perlu penyaringan hak akses **di tahap retrieval**, bukan di tampilan.

### 3.5 Percakapan multi-giliran

Tiap `evaSend()` berdiri sendiri, tanpa memori. Yang tidak bisa dilakukan:

- Lanjutan: *"kalau masih gagal gimana?"* — EVA tidak tahu "masih gagal" merujuk apa
- Klarifikasi berantai — sudah ada satu tingkat (bagian 3.4 mockup), tapi tidak bisa berlanjut

Klarifikasi justru yang paling menaikkan akurasi, karena pertanyaan karyawan biasanya pendek dan ambigu. **Yang dibutuhkan:** riwayat percakapan per sesi, dan penulisan ulang pertanyaan dengan konteks sebelumnya sebelum masuk ke retrieval.

### 3.6 Integrasi tiket

Sekarang nomor tiket dikarang di frontend:

```js
const num = pre + '-2026-' + String(482 + st.evaSeq).padStart(4,'0');
```

**Yang dibutuhkan:**

1. Nomor tiket berasal dari sumber yang sama dengan Helpdesk 2.0 — satu penomoran, bukan dua
2. Tiket dari EVA muncul di **My Tickets** milik Requester. Saat ini dua mockup ini terpisah total
3. **Transkrip percakapan ikut terbawa ke tiket.** Ini sering dilupakan tapi sangat berharga: agent support langsung tahu langkah apa saja yang sudah dicoba, sehingga tidak menyuruh mengulang
4. Rekomendasi tipe tiket dari EVA masuk sebagai **saran**, bukan keputusan final — helpdesk tetap yang menentukan tim dan PIC

### 3.7 Umpan balik rating yang tidak kembali

Artikel "Printer jaringan offline" punya rating **2.6 dengan tren −8**, tapi EVA tetap menyajikannya persis sama ke penanya berikutnya. Data mengalir masuk, tidak ada yang mengalir balik.

**Yang dibutuhkan:**

- Rating rendah menurunkan peringkat artikel di hasil retrieval
- Ambang tertentu memicu status `Needs Update` secara otomatis (sekarang manual)
- Artikel dengan rating sangat rendah bisa ditahan dari EVA sambil menunggu perbaikan

### 3.8 Pengelompokan pertanyaan tak terjawab

Mockup menampilkan *"Bagaimana memperpanjang timeout sesi SAP?" — 214×* dengan satu contoh kalimat. Di kenyataan, 214 orang menulis 214 kalimat berbeda.

**Siapa yang mengelompokkan mereka jadi satu pertanyaan kanonik?** Itu pekerjaan clustering yang belum ada. Tanpa ini, layar Unanswered Questions akan berisi ribuan baris nyaris-duplikat dan menjadi tidak terpakai.

**Yang dibutuhkan:** embedding pertanyaan → clustering → satu perwakilan per klaster, dengan jumlah dan contoh kalimat.

### 3.9 Tata kelola persetujuan

`applyReviewDecision()` memperbolehkan **siapa pun menyetujui apa pun**. Padahal data kepemilikannya sudah ada: Access Request → "HC + BPO", ELISA → SCM, SAP → "IT / BPO".

Artinya staf IT bisa menyetujui artikel kebijakan milik HC. Untuk organisasi sebesar ADHI ini masalah tata kelola yang akan ditanyakan auditor.

**Yang dibutuhkan:** Review Queue merutekan ke owner kategori, dan penulis tidak bisa menyetujui tulisannya sendiri.

---

## 4. Metrik yang belum diukur: deflection palsu

Mockup mengukur **deflection rate** 68% — pertanyaan yang selesai tanpa jadi tiket. Tapi tidak ada yang mengukur kebalikannya:

> **EVA menjawab, tapi karyawan tetap membuat tiket untuk masalah yang sama.**

Ini sinyal paling tajam yang bisa didapat, karena artinya jawabannya *ada* tapi tidak menyelesaikan. Tanpa metrik ini, angka deflection 68% bisa menipu — terlihat sukses padahal sebagian karyawan hanya menyerah lalu membuat tiket lewat jalur lain.

**Cara mengukurnya sederhana:** catat bila user membuat tiket dalam ~10 menit setelah menerima jawaban untuk topik yang sama. Ini bisa dikerjakan lebih awal karena tidak butuh perubahan arsitektur.

---

## 5. Urutan pengerjaan

### Fase 1 — Membuat EVA benar-benar menjawab

Tanpa fase ini, sisanya tidak ada gunanya. EVA yang sering salah akan ditinggalkan karyawan setelah dua atau tiga kali kecewa, dan sulit merebut kembali kepercayaan itu.

1. Pipeline embedding untuk artikel, FAQ, dan chunk dokumen
2. Vector store + hybrid search
3. Penanganan Bahasa Indonesia (stemming, informal, typo)
4. Kalibrasi ambang keyakinan dari data nyata
5. Indexing dokumen yang sungguhan (menggantikan `setTimeout`)

### Fase 2 — Membuat EVA berguna

Yang mengubah EVA dari "FAQ pintar" jadi asisten sungguhan.

1. Konteks identitas dari SSO + penyaringan hak akses saat retrieval
2. Integrasi tiket dengan Helpdesk 2.0, termasuk transkrip percakapan
3. Query "status tiket saya"
4. Percakapan multi-giliran dengan memori sesi

### Fase 3 — Membuat EVA membaik sendiri

1. Clustering pertanyaan tak terjawab
2. Rating memengaruhi peringkat retrieval
3. Metrik deflection palsu
4. Persetujuan dirutekan ke owner kategori
5. SLA/aging pada Unanswered Questions

**Catatan:** butir 3.9 (persetujuan by owner) dan metrik deflection palsu sebenarnya **murah dikerjakan** dan bisa dimajukan ke fase mana pun. Keduanya diletakkan di fase 3 karena tidak memblokir yang lain, bukan karena tidak penting.

---

## 6. Risiko utama

| Risiko | Dampak | Penanganan |
|---|---|---|
| EVA menjawab yakin tapi salah | Kepercayaan karyawan hilang, sulit dipulihkan | Ambang tinggi di awal; lebih baik sering bilang tidak tahu |
| Kualitas KB rendah saat peluncuran | EVA terlihat bodoh padahal mesinnya benar | Isi KB dulu lewat Documents sebelum rilis |
| Kebocoran informasi antar-unit | Masalah kepatuhan | Penyaringan hak akses di tahap retrieval, bukan tampilan |
| Unanswered menumpuk tanpa ditindak | Fitur terbaik jadi tidak terpakai | SLA + clustering; tetapkan pemilik proses |
| Ketergantungan pada satu admin | Pengetahuan mandek bila orangnya pindah | Owner per kategori, bukan satu Knowledge Administrator |

---

## 7. Yang perlu diputuskan

Hal-hal yang tidak bisa dijawab dari sisi teknis dan butuh keputusan pemilik proses:

1. **Model embedding di mana?** Layanan cloud lebih akurat, tapi berarti isi KB internal keluar dari jaringan ADHI. On-premise lebih aman tapi lebih berat.
2. **Siapa pemilik proses EVA?** Mockup mengasumsikan satu Knowledge Administrator. Untuk 12 aplikasi dengan owner berbeda, ini kemungkinan tidak cukup.
3. **Apakah EVA boleh bertindak, atau hanya memberi informasi?** Saat ini hanya membuat tiket. Pertanyaan lanjutan: bolehkah EVA mereset password sendiri, membuka akun terkunci, atau memberi akses? Setiap "boleh" menambah kebutuhan otorisasi.
4. **Bahasa apa saja?** Settings menyebut "Bahasa + English". Perlu dipastikan apakah artikel wajib dwibahasa atau cukup satu.

---

## Lampiran — Berkas terkait

| Berkas | Isi |
|---|---|
| `/eva/console.html` | Admin console (bundle x-dc terkompilasi; sumber tersimpan di dalam tag `__bundler/template`) |
| `/eva/index.html` | Wrapper + widget Switch Role |
| `/shared/nav-widget.js` | Role switcher lintas mockup |
