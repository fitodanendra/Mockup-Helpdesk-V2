# EVA — Serah Terima ke Development

**Ditulis:** 22 Juli 2026
**Untuk:** sesi kerja berikutnya, dan developer yang akan membangun EVA.

Dokumen ini menjawab satu pertanyaan: **"saya harus mulai dari mana?"**

Rancangannya ada di [`eva-rancangan-teknis.md`](eva-rancangan-teknis.md) — dokumen
ini tidak mengulanginya. Baca yang itu dulu, lalu kembali ke sini.

---

## 1. Status saat ini

Mockup EVA **selesai** dan sudah di-push.

| | |
|---|---|
| Repo | `github.com/fitodanendra/Mockup-Helpdesk-V2` |
| Cabang | `main` |
| Commit terakhir | `2c1f8ce` |
| Berkas utama | `eva/console.html` |

Mockup ini adalah **spesifikasi perilaku**, bukan kode yang dipindahkan. Ia
menunjukkan apa yang harus terjadi; Laravel yang akan mewujudkannya.

### Menu yang ada (13)

Coverage Dashboard · Article Library · Manage FAQ · Documents ·
Unanswered Questions · Ticket Recommendation · Training Overview ·
EVA Preview · Log Percakapan · Analytics · Rating & Feedback ·
Search Settings · Apps & Systems

### Yang sengaja dihapus dari mockup

Jangan dibangun kembali tanpa membaca alasannya:

| Dihapus | Alasan |
|---|---|
| Review Queue & status artikel | Tidak ada review. Gerbang satu-satunya: toggle Show in EVA |
| Menu Sub Category | Memaparkan taksonomi 38 baris, membingungkan admin, tidak diminta mentor |
| Menu EVA Insights | Duplikat Analytics. Satu kartunya yang unik dipindahkan ke sana |
| Pembuatan artikel manual | Artikel hanya lahir dari dokumen |
| Panel agregat uji di Training Overview | Hasil uji ditempelkan pada materinya, bukan layar terpisah |

---

## 2. Lingkungan — hasil pemeriksaan 22 Juli 2026

Diperiksa langsung di mesin, bukan asumsi.

### Sudah terpasang

| | Versi |
|---|---|
| PHP | 8.4.23 |
| Composer | 2.10.1 |
| Laravel Installer | 5.28.1 |
| Node / npm | 24.18.0 / 11.16.0 |
| Herd | terpasang (versi gratis) |
| SQLite | 3.51.0 |
| Git | 2.50.1 |
| macOS | 26.5.1 |

**Ekstensi PHP lengkap.** Enam belas ekstensi yang dibutuhkan sudah ada,
termasuk `pdo_pgsql` dan `redis`.

### Belum ada

| | Untuk apa | Kapan diperlukan |
|---|---|---|
| Server PostgreSQL | pencarian vektor (pgvector) | Fase 1 langkah 2–3 |
| Server Redis | antrean indeks dokumen | bisa ditunda, pakai antrean database dulu |
| `ANTHROPIC_API_KEY` | memanggil Claude | Fase 1 langkah 3 |

Catatan: ekstensi PHP-nya sudah ada, yang belum adalah **server database**-nya.
Herd yang terpasang versi gratis, jadi tidak membawa PostgreSQL/Redis bawaan.

### Pilihan memasang PostgreSQL

| Cara | Kelebihan | Kekurangan |
|---|---|---|
| Postgres.app | gratis, tanpa terminal | pgvector dipasang terpisah |
| Herd Pro | menyatu dengan Herd, sekalian Redis | berbayar |
| Docker (`pgvector/pgvector`) | pgvector langsung ada | perlu pasang Docker dulu |

**Saran: tunda dulu.** Fase 1 langkah 1 bisa dikerjakan penuh dengan SQLite.
Pilih setelah paham kebutuhan sebenarnya.

---

## 3. Langkah pertama yang bisa dikerjakan sekarang

Semua ini jalan dengan SQLite, tanpa PostgreSQL, tanpa API key.

1. **Buat proyek Laravel**, sambungkan ke Herd
2. **Migrasi tabel master** — `applications`, `catalog_subjects`
   (struktur di rancangan teknis §6)
3. **Seeder dari katalog** — impor `shared/helpdesk-catalog.js`:
   34 aplikasi + 139 subject (82 incident + 41 service + 16 access)
4. **CRUD dasar** — dokumen, artikel, FAQ beserta relasinya
5. **Layar admin** mengikuti mockup

Baru setelah itu masuk ke pencarian vektor, dan saat itulah PostgreSQL
diperlukan.

---

## 4. Aturan yang tidak boleh dilanggar

Ringkasan dari rancangan teknis §2. Diulang di sini karena inilah yang paling
sering dilanggar tanpa sadar:

1. Artikel **tidak ditulis manual** — lahir dari dokumen
2. FAQ ditulis admin, **langsung tayang** tanpa review
3. EVA membaca **hanya artikel & FAQ**, tidak membaca tiket
4. EVA **hanya merekomendasikan** tiket — tidak boleh punya izin tulis ke tabel tiket
5. Service Catalog **milik role Admin** — EVA hanya membaca
6. BPO & approval diatur di Admin, tampil di Requester — EVA tidak menyentuhnya

---

## 5. Pola cacat yang berulang di mockup

Selama pengerjaan ditemukan **empat kali** cacat berbentuk sama: satu konsep,
dua sumber data. Data contoh ditulis manual agar layar terlihat penuh, lalu
tertinggal setelah data nyatanya ada.

| Ditemukan pada | Gejalanya |
|---|---|
| Coverage FAQ | menebak subject dari aturan routing |
| Top Articles | daftar beku menduplikasi `evaUses` |
| Rating & Feedback | bintang karyawan tidak sampai ke statistik |
| Content gaps | daftar beku menduplikasi Unanswered Questions |

**Pelajaran untuk development:** satu konsep harus punya satu sumber. Bila dua
layar menampilkan angka yang sama, keduanya wajib menghitung dari query yang
sama — jangan ada kolom ringkasan yang disimpan terpisah lalu lupa diperbarui.

Cacat kelima berjenis lain tetapi sama berbahayanya: fungsi `attachArticle`
dipanggil tetapi tidak pernah didefinisikan, sehingga mekanisme dokumen →
artikel tidak pernah berjalan. Tidak terlihat karena data contoh sudah membawa
hasilnya. **Uji jalur yang membuat data baru, bukan hanya membaca data contoh.**

---

## 6. Yang masih menggantung

1. **`admin/index.html` berstatus modified** dan belum pernah di-commit.
   Perubahannya menghapus skrip yang menyembunyikan subtitle di Dashboard Admin.
   Bukan bagian pekerjaan EVA — perlu diputuskan terpisah.

2. **Lima keputusan terbuka** ada di rancangan teknis §14: layanan embedding,
   status awal artikel baru, ambang awal, retensi `answer_logs`, dan siapa
   merawat katalog.

3. **Dua kasus uji sengaja dibiarkan gagal** di Ticket Recommendation karena
   mengungkap tumpang tindih katalog yang nyata:
   - "akun terkunci" bersaing antara `User Locked` dan `Penonaktifan akun`
   - "printer offline tidak bisa cetak" bersaing antara `Printer offline` dan
     `Tidak bisa cetak ke printer jaringan`

   Perlu dibahas dengan mentor: rapikan katalognya, atau biarkan EVA bertanya
   balik saat ambigu.

---

## 7. Cara membaca mockup

`eva/console.html` adalah bundel terkompilasi 12 MB. Sumbernya utuh berupa
string JSON di dalam `<script type="__bundler/template">`.

Untuk membacanya:

```python
import json
src = open('eva/console.html', encoding='utf-8').read()
TAG = '<script type="__bundler/template">'
s = src.find(TAG) + len(TAG); e = src.find('</script>', s)
tpl = json.loads(src[s:e].strip())          # sumber x-dc yang terbaca
```

Untuk menulis kembali, garis miring penutup tag harus di-escape persis seperti
aslinya — jika tidak, bundel rusak dan halaman gagal dimuat:

```python
json.dumps(tpl, ensure_ascii=False).replace('</', '<\\u002F')
```

Logikanya ada di `class Component extends DCLogic`. Perilaku yang perlu ditiru
di Laravel ada di sana — terutama `evaAnswer`, `recoResolve`, `attachArticle`,
dan `evaStar`.

---

## Berkas yang perlu dibaca

| Berkas | Isi |
|---|---|
| [`eva-rancangan-teknis.md`](eva-rancangan-teknis.md) | Rancangan lengkap: aturan, alur, basis data, pemakaian Claude |
| `shared/helpdesk-catalog.js` | 34 aplikasi + 139 subject, hasil konversi Excel |
| `eva/console.html` | Mockup EVA |
| `requester/dashboard.html` | Form Buat Tiket, pemakai katalog yang sama |
