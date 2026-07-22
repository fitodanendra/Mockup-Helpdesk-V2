# EVA — Rancangan Teknis

**Terakhir ditulis ulang:** 22 Juli 2026
**Menggantikan:** versi 20 Juli, yang sudah tidak sesuai — masih menyebut Review
Queue, status "Needs Update", dan EVA membuat tiket. Ketiganya sudah dibatalkan.

**Untuk siapa:** developer yang akan membangun EVA, dan mentor yang menilai
rancangannya.

---

## 1. Apa itu EVA

Asisten virtual di Portal SSO ADHI Karya. Karyawan bertanya soal layanan TI;
EVA menjawab dari Knowledge Base. Bila tidak bisa menjawab, EVA **menyiapkan
draf tiket** — bukan menerbitkannya.

Satu kalimat yang menentukan seluruh rancangan:

> EVA menyiapkan, karyawan mengirim, Helpdesk menangani.

---

## 2. Enam aturan yang tidak boleh dilanggar

Aturan ini berasal dari mentor dan sudah disepakati. Setiap keputusan teknis di
dokumen ini turun dari sini.

| # | Aturan | Konsekuensi teknis |
|---|---|---|
| 1 | Artikel **tidak ditulis manual**. Artikel lahir dari dokumen yang diunggah admin, lalu disunting. | Tidak ada tombol "artikel baru" di mana pun. Perlu pipeline: unggah → ekstraksi → ringkas → artikel. |
| 2 | FAQ ditulis manual admin, **langsung tayang** tanpa review. | Tidak ada tabel status/approval untuk FAQ. Gerbang satu-satunya: toggle Show in EVA. |
| 3 | EVA membaca **hanya artikel dan FAQ**. Tidak membaca tiket. | Sumber retrieval hanya dua tabel itu. |
| 4 | EVA **hanya merekomendasikan** tiket. | EVA tidak boleh punya izin tulis ke tabel tiket. Penomoran & SLA milik sistem Helpdesk. |
| 5 | Service Catalog milik **role Admin**. | EVA hanya membaca. Tidak ada endpoint tulis katalog dari EVA. |
| 6 | BPO & approval diatur di Admin, tampil di Requester. | EVA tidak menyentuh keduanya. Berhenti setelah memilih subject. |

---

## 3. Dua pencarian yang berbeda

Bagian ini paling sering disalahpahami, jadi ditegaskan lebih dulu.

EVA melakukan **dua pencarian ke tempat berbeda**, untuk tujuan berbeda:

| | Mencari | Sumber | Kapan |
|---|---|---|---|
| **Pencarian A** | Jawaban | Knowledge Base — artikel & FAQ | Selalu, begitu karyawan bertanya |
| **Pencarian B** | Nama masalah | Service Catalog (139 subject) | Hanya bila perlu draf tiket |

**Service Catalog tidak berisi jawaban.** Isinya hanya nama masalah —
`Password Expired`, `User Locked`. Tidak ada satu pun langkah penyelesaian di
sana. Menganggap keduanya sama akan menghasilkan rancangan yang salah.

Satu istilah bisa muncul di dua tempat dengan peran berbeda:

- Di Knowledge Base — artikel berisi *cara menyelesaikannya*
- Di Service Catalog — nama masalah untuk *label tiket*

Selisih keduanya adalah angka kesiapan di Coverage Dashboard: dari 139 jenis
masalah yang mungkin terjadi, berapa yang sudah punya panduan tertulis.

---

## 4. Alur lengkap

```
Karyawan bertanya
      │
      ▼
[A] Cari di Knowledge Base (artikel + FAQ)
      │
      ├── skor ≥ ambang ──▶ Claude susun jawaban + kutip sumber ──▶ SELESAI
      │                     (dihitung sebagai deflection)
      │
      └── skor < ambang
                │
                ▼
        [B] Cari kandidat subject di Service Catalog (139)
                │
                ▼
        Claude pilih satu subject (structured output)
                │
                ├── "tidak ada yang cocok" ──┐
                ├── skor < ambang ───────────┤
                │                            ▼
                │                   Tipe cadangan / EVA tanya balik
                │
                ▼
        Subject terpilih → jenis tiket ikut otomatis
                │
                ▼
        EVA isikan form Requester (app, sub category, subject, deskripsi)
                │
                ▼
        Requester tampilkan BPO & approval (dari data Admin)
                │
                ▼
        Karyawan periksa → kirim → nomor tiket terbit
```

Perhatikan: EVA berhenti sebelum kotak terakhir. Tidak ada panah dari EVA
langsung ke pembuatan tiket.

---

## 5. Service Catalog — asal dan struktur

### Asalnya

Berkas Excel **"Insiden & Service List Issue for Helpdesk 2.0.xlsx"**, disusun
tim Service Management. Di mockup sudah dikonversi menjadi
`shared/helpdesk-catalog.js`.

### Isinya

| Kelompok | Jumlah | Menentukan jenis tiket |
|---|---|---|
| Incident | 82 | `Incident` |
| Service Request | 41 | `Service Request` |
| Access Request | 16 | `Access Request` |
| **Total subject** | **139** | |
| Applications | 34 | membawa BPO |

**Jenis tiket tidak pernah ditebak.** Ia melekat pada kelompok asal subject.
`Password Expired` ada di daftar Incident, maka jenis tiketnya pasti Incident.
AI hanya memilih subject; jenis tiket ikut serta.

### Bentuk datanya

```js
// incidents
{ app:"SAP", module:"LOGIN SAP", subject:"Password Expired",
  approval:false, bpo:false }

// applications
{ name:"ADELE", bpo:"IT" }
```

### Siapa yang membaca

Satu sumber, tiga pemakai — sudah dibuktikan di mockup, tempat
`shared/helpdesk-catalog.js` dipakai bersama oleh Requester dan EVA:

| Pemakai | Untuk apa |
|---|---|
| Requester | mengisi dropdown form Buat Tiket |
| EVA | daftar pilihan yang boleh dipilih AI |
| Admin | tempat mengelola isinya |

Konsekuensinya: layanan baru cukup ditambah sekali di Admin, otomatis muncul di
Requester maupun pilihan EVA.

---

## 6. Rancangan basis data

### Tabel master (milik Admin)

| Tabel | Isi | Catatan |
|---|---|---|
| `applications` | 34 aplikasi + BPO | Sumber BPO satu-satunya |
| `catalog_subjects` | 139 subject, jenis tiket, flag approval/bpo | Turunan Excel; jenis tiket dari kelompok asal |

### Tabel Knowledge Base (milik EVA)

| Tabel | Isi |
|---|---|
| `documents` | berkas asli, status indeks, pengunggah |
| `articles` | ringkasan dokumen, `source_document_id`, `subject_id`, `is_active` |
| `faqs` | tanya-jawab, `subject_id`, `is_active` |
| `kb_chunks` | potongan teks + vektor, menunjuk artikel atau FAQ |
| `subject_vectors` | vektor nama subject, untuk Pencarian B |

`subject_id` pada `articles` dan `faqs` adalah kunci yang membuat angka coverage
bisa dihitung: berapa dari 139 subject yang punya minimal satu artikel/FAQ aktif.

### Tabel operasional

| Tabel | Isi | Mengisi menu |
|---|---|---|
| `conversations` | percakapan dan hasil akhirnya | Log Percakapan |
| `answer_logs` | pertanyaan, sumber terpilih, skor, apakah dikoreksi | Analytics, Unanswered Questions |
| `answer_ratings` | bintang 1–5, alasan, komentar, menunjuk `answer_logs` | Rating & Feedback |
| `test_cases` | contoh pertanyaan uji + sasaran yang benar (artikel, FAQ, atau subject) | Editor artikel & FAQ, Ticket Recommendation |

`answer_logs` sering dilupakan tetapi wajib. Tanpa itu, Unanswered Questions dan
Analytics tidak punya sumber data, dan tidak ada bahan untuk memperbaiki EVA.

`answer_ratings` menempel pada **jawaban**, bukan langsung pada artikel. Ini
disengaja: satu artikel bisa dikutip untuk bermacam pertanyaan, dan yang dinilai
karyawan adalah jawaban untuk pertanyaannya sendiri. Rata-rata per artikel adalah
hasil agregasi, bukan kolom yang disimpan.

Alasan yang bisa dipilih saat penilaian rendah — *Langkah tidak berhasil,
Informasi kurang lengkap, Kurang jelas, Kasus saya berbeda* — disimpan sebagai
kolom terpisah, bukan teks bebas. Itulah yang membentuk panel "Tema masukan".

---

## 7. Pemakaian Claude

Model: **`claude-opus-4-8`**.

### Pencarian A — menjawab dari Knowledge Base

Kirim pertanyaan + 3–5 potongan teks teratas. Minta jawaban yang **hanya**
bersumber dari potongan itu, disertai kutipan. Bila potongan tidak cukup, model
harus menyatakan tidak tahu — bukan mengarang.

### Pencarian B — memilih subject

Kirim pertanyaan + sekitar 10 kandidat subject hasil penyaringan. Pakai
**structured output** (`output_config.format` dengan `json_schema`) sehingga
model wajib memilih dari daftar dan tidak bisa mengarang subject baru:

```json
{ "subject_id": 2, "alasan": "akun terkunci akibat salah password" }
```

Daftar pilihan **wajib menyertakan opsi "tidak ada yang cocok"**. Alasannya di
bagian berikut.

### Yang tidak disediakan Anthropic

Anthropic tidak menyediakan layanan pembuat vektor. Pencarian A dan B memakai
layanan embedding lain atau full-text search PostgreSQL. Claude hanya dipakai
untuk menyusun jawaban dan memilih subject.

---

## 8. Ambang keyakinan — dari mana angkanya

Ini keputusan teknis yang paling mudah salah, jadi ditulis eksplisit.

**Cara yang salah:** menanyakan ke model *"seberapa yakin kamu, 0–100?"*. Model
akan menjawab dengan angka, tetapi angka itu tidak terkalibrasi — model cenderung
terlalu percaya diri dan menjawab 90% untuk hal yang sebenarnya ditebak.

**Cara yang benar — dua sinyal:**

| Sinyal | Asal | Sifat |
|---|---|---|
| Skor kemiripan | Hasil pencarian vektor | Objektif, bisa diukur & disetel |
| Model menolak memilih | Opsi "tidak ada yang cocok" | Jauh lebih andal daripada angka |

Slider ambang di halaman Ticket Recommendation mengatur **skor kemiripan**. Bila
model memilih "tidak ada yang cocok", langsung jatuh ke tipe cadangan berapa pun
skornya.

> **Catatan untuk developer:** di mockup, angka keyakinan dihitung dari kecocokan
> kata kunci karena tidak ada model sungguhan. Jangan tiru rumusnya. Yang perlu
> ditiru adalah perilakunya: ada ambang, dan di bawahnya EVA tidak menebak.

---

## 9. Yang nyata vs yang disimulasikan di mockup

Mockup menunjukkan tampilan dan alur, bukan implementasi. Tabel ini memisahkan
keduanya supaya developer tidak salah menyalin.

| Bagian | Di mockup | Di produksi |
|---|---|---|
| Pencarian jawaban | Cocok kata kunci ke 5 entri tetap | Pencarian vektor ke seluruh `kb_chunks` |
| Pemilihan subject | Cocok kata kunci ke 139 aturan | Penyaringan vektor + Claude structured output |
| Skor keyakinan | Rumus dari jumlah & panjang kata yang cocok | Skor kemiripan vektor |
| Ringkasan dokumen | Teks tetap `"Ringkasan otomatis dari dokumen X"` | Ekstraksi teks + peringkasan oleh Claude |
| Indeks dokumen | `setTimeout` 1,6 detik | Antrean pekerjaan: ekstraksi → potong → vektor |
| Data | Seluruhnya di memori, hilang saat refresh | PostgreSQL |
| Riwayat coverage | Lima titik contoh; titik terakhir dihitung nyata | Snapshot bulanan |

**Yang sudah nyata di mockup** dan boleh dijadikan acuan perilaku:

- Coverage dihitung dari data, bukan angka tetap
- Toggle Show in EVA benar-benar memengaruhi jawaban EVA
- Toggle sumber di Training Overview benar-benar mematikan sumber
- Contoh pertanyaan uji benar-benar dijalankan, bukan hiasan
- Dokumen yang diunggah benar-benar melahirkan artikel

---

## 10. Contoh Pertanyaan Uji

Menggantikan konsep "frasa pemicu" yang sudah usang.

Dengan pencarian kata kunci, admin harus mendaftarkan setiap variasi kata.
Dengan pencarian makna, itu tidak perlu lagi — model paham *"terkunci"* sama
dengan *locked*. Frasa tersebut berubah fungsi menjadi **kasus uji**:

> Kalau karyawan menulis *"sap saya kekunci"*, EVA harus menemukan subject
> **Aktivasi/Unlock akun**.

Nilainya justru naik: ketika model embedding diganti atau strategi pemotongan
teks diubah, kasus uji inilah yang menangkap kemunduran.

Kasus uji **menempel pada materi yang diuji**, bukan pada satu layar terpisah —
sehingga admin melihat hasilnya tepat saat sedang menyunting materi itu:

| Ditulis di | Menguji | Hasil tampil |
|---|---|---|
| Editor artikel & FAQ, tab EVA Training | Pencarian A — apakah EVA menemukan materi ini | Lolos/Gagal di samping tiap pertanyaan |
| Ticket Recommendation, per baris subject | Pencarian B — apakah EVA menggolongkan ke subject ini | Chip berwarna + ringkasan "N / M lolos" |

Rancangan ini disengaja. Panel agregat terpisah pernah dicoba di Training
Overview lalu dibuang: admin harus berpindah layar untuk tahu apakah suntingannya
berhasil, dan angkanya tidak memberi tahu materi mana yang perlu diperbaiki.
Menempelkan hasil pada materinya membuat perbaikan bisa langsung dikerjakan.

Sumber terbaik untuk kasus uji baru adalah menu Unanswered Questions, yang berisi
kalimat asli karyawan.

---

## 11. Umpan balik karyawan

Setelah EVA menjawab, karyawan menilai jawaban itu **1–5 bintang**. Bila
penilaiannya rendah, muncul pilihan alasan dan kolom komentar.

### Dua sinyal untuk dua masalah berbeda

Ini yang membuat umpan balik penting dan **tidak bisa digantikan** oleh
Unanswered Questions:

| Menu | Menjawab | Masalah yang ditemukan |
|---|---|---|
| Unanswered Questions | Apa yang **belum ada**? | Knowledge Base bolong |
| Rating & Feedback | Apa yang **ada tapi jelek**? | Knowledge Base salah, kurang lengkap, atau usang |

Contoh dari data mockup: artikel **"Printer jaringan offline"** berating 2,6
dengan tren menurun. Artikelnya ada, EVA mengutipnya, tetapi karyawan menyatakan
tidak membantu.

Kasus seperti ini **tidak akan pernah muncul** di Unanswered Questions, karena
dari sisi sistem EVA merasa sudah menjawab. Inilah yang di Analytics disebut
**deflection palsu**: dihitung berhasil, padahal karyawan tetap kesulitan.

### Lingkarannya harus tertutup

Rating tidak boleh berhenti sebagai angka pajangan. Alurnya:

```
Karyawan beri bintang
      │
      ▼
answer_ratings  ──agregasi──▶  Rating & Feedback
                                     │
                                     ▼
                        Admin urutkan "rating terendah"
                                     │
                                     ▼
                        Klik artikel ──▶ perbaiki isinya
                                     │
                                     ▼
                              kembali ke Siklus 1
```

Di mockup, tombol **Buka** pada tabel "Performa per artikel" sudah membawa admin
langsung ke artikel yang bermasalah. Perilaku itu yang perlu ditiru: setiap
angka buruk harus punya jalan menuju perbaikannya.

### Yang perlu diwaspadai

- **Bias jumlah.** Artikel dengan 842 penilaian tidak akan bergeser rata-ratanya
  oleh satu bintang. Untuk mendeteksi penurunan kualitas, pantau **tren periode
  terakhir**, bukan hanya rata-rata sepanjang masa.
- **Penilaian ganda.** Satu jawaban hanya boleh dinilai sekali oleh orang yang
  sama.
- **Sampel kecil.** Artikel dengan 3 penilaian jangan disejajarkan dengan yang
  punya 800. Tampilkan jumlahnya berdampingan dengan rata-rata.

---

## 12. Urutan pengerjaan

### Fase 1 — EVA bisa menjawab

1. Tabel master dari Excel (`applications`, `catalog_subjects`)
2. Unggah dokumen → ekstraksi teks → potong → vektor
3. Pencarian A + Claude menyusun jawaban dengan kutipan
4. `answer_logs` sejak hari pertama

Selesai fase ini EVA sudah berguna: menjawab dari dokumen perusahaan.

### Fase 2 — EVA bisa merekomendasikan tiket

5. `subject_vectors` + Pencarian B
6. Claude memilih subject dengan structured output
7. Ambang keyakinan + tipe cadangan
8. Serah terima ke form Requester

### Fase 3 — EVA bisa diperbaiki

9. Contoh pertanyaan uji + penjalannya
10. Coverage Dashboard
11. Unanswered Questions dari `answer_logs`
12. Rating & umpan balik — beserta jalan dari angka buruk menuju perbaikannya
    (`answer_ratings` → agregasi per artikel → buka artikel)

---

## 13. Risiko

| Risiko | Dampak | Penanganan |
|---|---|---|
| Ringkasan otomatis belum layak dikutip | EVA menjawab dengan teks placeholder | Artikel baru wajib disunting sebelum banyak dikutip; pantau lewat kartu "Perlu diperiksa" di Coverage Dashboard |
| Tumpang tindih katalog | Dua subject bermakna dekat, AI memilih yang salah | Sudah terbukti di mockup: `Printer offline` vs `Tidak bisa cetak ke printer jaringan`. Rapikan katalog, atau biarkan EVA bertanya balik |
| Deflection palsu | EVA dianggap menjawab padahal karyawan tetap membuat tiket | Catat di `answer_logs`, tampilkan sebagai metrik terpisah |
| Bahasa campuran | Karyawan menulis campur Indonesia–Inggris | Pilih model embedding multibahasa; uji dengan kasus uji nyata |
| Dokumen kedaluwarsa | EVA menjawab dari SOP lama | Tanggal berlaku pada dokumen; tandai yang lewat batas |

---

## 14. Yang masih perlu diputuskan

1. **Layanan embedding mana** — pihak ketiga, atau full-text search PostgreSQL
   dulu untuk versi pertama
2. **Artikel baru langsung aktif atau tidak** — di mockup langsung aktif; bila
   ringkasan otomatis dianggap berisiko, ubah jadi nonaktif sampai disunting
3. **Ambang awal berapa** — mockup memakai 55%, perlu disetel dengan data nyata
4. **Berapa lama `answer_logs` disimpan** — menyangkut privasi dan biaya
5. **Siapa merawat katalog** — perubahan Excel masuk lewat siapa

---

## Lampiran — berkas terkait

| Berkas | Isi |
|---|---|
| `shared/helpdesk-catalog.js` | 34 aplikasi + 139 subject, hasil konversi Excel |
| `eva/console.html` | Mockup EVA Knowledge Admin Console |
| `requester/dashboard.html` | Form Buat Tiket, pemakai katalog yang sama |
| `admin/index.html` | Role Admin, pemilik katalog & BPO |
