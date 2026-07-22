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
termasuk `pdo_mysql`, `mysqli`, `pdo_pgsql`, dan `redis`.

### Belum ada

| | Untuk apa | Kapan diperlukan |
|---|---|---|
| Server MySQL | basis data pengembangan, mengikuti tim | Fase 1 langkah 1 |
| Server Redis | antrean indeks dokumen | bisa ditunda, pakai antrean database dulu |
| `ANTHROPIC_API_KEY` | memanggil Claude | Fase 1 langkah 3 |

Catatan: ekstensi PHP-nya sudah ada, yang belum adalah **server database**-nya.
Herd yang terpasang versi gratis, jadi tidak membawa MySQL/Redis bawaan, dan
Homebrew belum terpasang di mesin ini.

### Pilihan memasang MySQL

| Cara | Kelebihan | Kekurangan |
|---|---|---|
| DBngin | gratis, satu aplikasi untuk MySQL + PostgreSQL + Redis, sepembuat Herd | perlu unduh terpisah |
| Herd Pro | menyatu dengan Herd | berbayar |
| Docker | versi bisa dipersis-samakan dengan tim | perlu pasang Docker dulu |

**Saran: DBngin.** Gratis, dan nanti PostgreSQL untuk tahap kantor bisa
dijalankan dari aplikasi yang sama.

Samakan **versi MySQL** dengan yang dipakai tim. Beda versi bisa berbeda
perlakuan pada charset, mode `ONLY_FULL_GROUP_BY`, dan panjang indeks.

---

## 3. MySQL sekarang, PostgreSQL nanti

Rekan tim sudah mulai membangun **Requester, Approver, Support, dan Admin**
memakai **MySQL**. PostgreSQL milik kantor baru dipakai nanti.

**Ikut MySQL.** Satu basis data untuk semua role, satu set migrasi, satu skema.
Memakai basis data berbeda dari tim untuk role EVA akan memecah migrasi dan
menyembunyikan bentrokan skema sampai penggabungan — justru saat paling mahal
untuk diperbaiki.

### Yang perlu dijaga agar pindah ke PostgreSQL tidak menyakitkan

| Jaga | Sebabnya |
|---|---|
| Pakai Schema Builder Laravel, hindari `DB::statement` berisi SQL khas MySQL | migrasi tetap jalan di kedua basis data |
| Hindari `ENUM`; pakai `string` + validasi di aplikasi | perubahan `ENUM` di PostgreSQL merepotkan |
| Jangan andalkan penamaan yang tidak peka huruf besar-kecil | MySQL memaklumi, PostgreSQL tidak |
| Jangan andalkan urutan baris tanpa `ORDER BY` | urutan bawaan keduanya berbeda |
| `utf8mb4` sejak awal | supaya emoji dan aksara non-latin tidak memutus data |

### Pencarian vektor — jangan dibangun di atas MySQL

Ini konsekuensi terpenting. **pgvector adalah ekstensi PostgreSQL dan tidak ada
padanannya di MySQL.** Inti EVA — mencari artikel berdasarkan makna, bukan
kecocokan kata — belum bisa dijalankan sepenuhnya selama masih di MySQL.

Yang harus dilakukan: **kurung pencarian di balik satu antarmuka**, misalnya
`KnowledgeSearch` dengan satu metode `cari(string $pertanyaan): array`.

| Tahap | Penerapan |
|---|---|
| Sekarang (MySQL) | `FULLTEXT` MySQL — cocok kata, cukup untuk membangun seluruh layar dan alur |
| Nanti (PostgreSQL) | pgvector — ganti satu kelas saja, sisanya tidak berubah |

Simpan embedding di tabel tersendiri (`article_embeddings`) yang selama tahap
MySQL boleh dibiarkan kosong. Dengan begitu perpindahan nanti berarti mengisi
satu tabel dan menukar satu kelas, bukan membongkar ulang.

**Jangan** memakai tipe `VECTOR` bawaan MySQL 9. Ia tidak punya indeks ANN,
dukungan Laravel-nya tipis, dan tetap harus dibuang saat pindah ke pgvector.

---

## 4. Langkah pertama yang bisa dikerjakan sekarang

Semua ini jalan dengan MySQL, tanpa PostgreSQL, tanpa API key.

1. **Pasang MySQL**, samakan versinya dengan tim
2. **Buat proyek Laravel**, sambungkan ke Herd, `DB_CONNECTION=mysql`
3. **Sepakati kepemilikan tabel dengan tim** — tabel mana milik EVA, tabel mana
   milik role lain, dan siapa memiliki `applications` serta `catalog_subjects`.
   Katalog dipakai bersama Requester, jadi harus satu tabel, bukan dua salinan
4. **Migrasi tabel master** — `applications`, `catalog_subjects`
   (struktur di rancangan teknis §6)
5. **Seeder dari katalog** — impor `shared/helpdesk-catalog.js`:
   34 aplikasi + 139 subject (82 incident + 41 service + 16 access)
6. **CRUD dasar** — dokumen, artikel, FAQ beserta relasinya
7. **Layar admin** mengikuti mockup, dengan pencarian `FULLTEXT`

Langkah 3 mudah terlewat dan paling mahal bila terlewat. Requester dan EVA
membaca katalog yang sama; bila masing-masing membuat tabelnya sendiri,
muncul kembali pola cacat di §6 — satu konsep, dua sumber data.

---

## 5. Aturan yang tidak boleh dilanggar

Ringkasan dari rancangan teknis §2. Diulang di sini karena inilah yang paling
sering dilanggar tanpa sadar:

1. Artikel **tidak ditulis manual** — lahir dari dokumen
2. FAQ ditulis admin, **langsung tayang** tanpa review
3. EVA membaca **hanya artikel & FAQ**, tidak membaca tiket
4. EVA **hanya merekomendasikan** tiket — tidak boleh punya izin tulis ke tabel tiket
5. Service Catalog **milik role Admin** — EVA hanya membaca
6. BPO & approval diatur di Admin, tampil di Requester — EVA tidak menyentuhnya

---

## 6. Pola cacat yang berulang di mockup

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

## 7. Yang masih menggantung

1. **`admin/index.html` berstatus modified** dan belum pernah di-commit.
   Perubahannya menghapus skrip yang menyembunyikan subtitle di Dashboard Admin.
   Bukan bagian pekerjaan EVA — perlu diputuskan terpisah.

2. **Perlu disepakati dengan tim** sebelum menulis migrasi:
   - versi MySQL yang dipakai
   - siapa memiliki tabel `applications` dan `catalog_subjects`
   - awalan nama tabel milik EVA, agar tidak bentrok
   - apakah semua role satu proyek Laravel atau terpisah

3. **Lima keputusan terbuka** ada di rancangan teknis §14: layanan embedding,
   status awal artikel baru, ambang awal, retensi `answer_logs`, dan siapa
   merawat katalog.

4. **Dua kasus uji sengaja dibiarkan gagal** di Ticket Recommendation karena
   mengungkap tumpang tindih katalog yang nyata:
   - "akun terkunci" bersaing antara `User Locked` dan `Penonaktifan akun`
   - "printer offline tidak bisa cetak" bersaing antara `Printer offline` dan
     `Tidak bisa cetak ke printer jaringan`

   Perlu dibahas dengan mentor: rapikan katalognya, atau biarkan EVA bertanya
   balik saat ambigu.

---

## 8. Cara membaca mockup

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
