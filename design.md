# Design Brief — Portofolio Backend Developer / Vibe Coder

Brief ini untuk generate UI di Google Stitch. Isinya token desain, struktur konten, dan aturan yang bikin hasilnya nggak kelihatan seperti template AI generik.

## Siapa dan untuk apa

Pemilik: backend web developer yang belajar dan membangun sambil dibantu AI ("vibe coding"). Proyek yang ada berasal dari tugas SMK dan kuliah, bukan produk komersial besar. Audiens: rekruter, sesama developer, orang yang klik dari GitHub/LinkedIn.

Ironi yang dipakai sebagai kekuatan, bukan disembunyikan: orang ini membangun web pakai bantuan AI, tapi portofolionya harus terasa dibuat dengan tangan, spesifik, dan jujur soal prosesnya. Kejujuran tentang cara kerja jadi nilai jual, bukan sesuatu yang ditutupi.

## Prinsip desain

1. **Log, bukan galeri.** Proyek ditampilkan sebagai entri kronologis bertanggal asli, bukan grid kartu mengkilap. Formatnya meniru commit log atau changelog, karena itu memang dunia sehari-hari seorang backend dev.
2. **Fungsional, bukan marketing.** Tombol dan label bilang persis apa yang terjadi. Nggak ada bahasa jualan.
3. **Satu aksen, dipakai hemat.** Warna signal cuma nongol di elemen interaktif dan penanda status, bukan sebagai hiasan di mana-mana.
4. **Rata kiri, disiplin.** Bukan tata letak SaaS yang serba center-align dengan hero besar di tengah. Kesan yang dicari: dokumen teknis, bukan landing page jualan.

## Checklist anti-AI-slop

Hindari semua ini secara sadar:

- Kombinasi cream (`#F4F1EA`) + aksen terracotta/oranye — kombinasi paling gampang ditebak sebagai hasil AI.
- Background gelap + aksen hijau neon atau vermillion — klise "portofolio hacker".
- Kartu seragam, radius sama rata, shadow abu-abu lembut (`rgba(0,0,0,.1)`) di semua tempat.
- Label ALL CAPS di atas heading (contoh: "PROJECTS" kecil sebelum judul "Log Proyek").
- Metadata yang disambung titik tengah, misalnya "Laravel · MySQL · VPS".
- Tanda panah "→" ditempel di akhir teks tombol atau link.
- Satu kata di headline dikasih warna atau italic beda sendiri buat "aksen".
- Penomoran 01/02/03 di konten yang sebenarnya bukan urutan proses. (Log proyek di sini pakai tanggal asli karena memang kronologis — itu boleh, karena datanya memang berurutan.)
- Animasi fade-slide-up di tiap section plus hover-lift di tiap kartu. Motion dibatasi satu momen terencana saja (lihat bagian Motion).

## Warna

| Nama | Hex | Pemakaian |
|---|---|---|
| Fog | `#EDEFEA` | Background utama |
| Paper | `#F7F8F4` | Surface section alternate, sedikit lebih terang dari Fog |
| Ink | `#1B2119` | Teks utama — hitam hangat dengan sedikit undertone hijau, bukan `#000` atau `#0B0B0B` polos |
| Signal Amber | `#D9A62A` | Aksen interaktif utama: link aktif, status indicator, focus ring |
| Deep Teal | `#2C5262` | Aksen sekunder: hover state, grafik/highlight kecil |
| Hairline | `#D2D5CB` | Garis pembatas antar-entri, border tipis |

Enam warna, tidak lebih. Kalau butuh warna tambahan saat build, turunkan dari salah satu di atas (tint/shade), jangan nambah hue baru.

## Tipografi

Dua keluarga font, dipakai untuk peran yang jelas beda:

- **Archivo** — display, heading, dan body. Grotesk yang tegas, terasa presisi tanpa jadi dingin.
- **JetBrains Mono** — hanya untuk konten yang memang teknis: baris command line di hero, tanggal entri log, snippet kode. Jangan dipakai untuk label navigasi atau eyebrow dekoratif — itu yang bikin situs kelihatan template.

Skala (desktop / mobile):

| Elemen | Ukuran | Line-height | Weight |
|---|---|---|---|
| Hero statement | 56px / 36px | 1.05 | 700 |
| H2 (judul section) | 32px / 24px | 1.15 | 600 |
| H3 (judul entri proyek) | 20px / 18px | 1.3 | 600 |
| Body | 17px / 16px | 1.6 | 400 |
| Meta/mono (tanggal, command line) | 13px | 1.4 | 500 |

Lebar baris teks body maksimal sekitar 70 karakter. Sentence case di semua tempat, termasuk heading dan label — tidak ada teks yang di-uppercase.

## Layout

Satu kolom, rata kiri, lebar konten maksimal sekitar 720px untuk area teks. Tidak ada sidebar, tidak ada grid kartu. Entri log dipisah garis hairline tipis, bukan dibungkus kartu dengan shadow.

```
Desktop
┌──────────────────────────────────────────────┐
│  Nama                            • available  │
│                                                │
│  Backend developer.                           │
│  Belajar dan membangun sambil ngobrol ke AI.  │
│                                                │
│  $ whoami                                     │
│  > backend dev, Makassar                      │
├──────────────────────────────────────────────┤
│  Log proyek                                   │
│                                                │
│  2023.09  Sistem inventaris — proyek SMK      │
│           Laravel, MySQL, deploy di VPS       │
│           Lihat detail                        │
│  ─────────────────────────────────────────    │
│  2024.05  API absensi mahasiswa — kuliah      │
│           Express, PostgreSQL                 │
│           Lihat detail                        │
├──────────────────────────────────────────────┤
│  Stack                    Tentang             │
│  daftar bahasa/tools      paragraf singkat    │
├──────────────────────────────────────────────┤
│  Kontak — email, github, linkedin             │
└──────────────────────────────────────────────┘

Mobile: satu kolom, urutan sama, stack & tentang jadi
dua block berurutan (bukan dua kolom).
```

## Struktur konten

**Top bar** — nama dan satu indikator status kecil (titik + teks singkat, misalnya "available" atau "kuliah semester akhir"). Bukan navigasi menu penuh, karena situsnya satu halaman.

**Hero** — dua baris pernyataan singkat siapa dia, diikuti satu baris command line yang diketik sekali saat halaman dimuat (lihat Motion). Tidak ada gambar hero besar atau ilustrasi generik.

**Log proyek** — setiap entri berisi:
- Tanggal asli (format `2023.09`, bukan "Proyek #1")
- Judul proyek dan konteksnya (mis. "proyek SMK", "tugas kuliah")
- Satu-dua kalimat: apa yang dibangun dan kenapa, ditulis apa adanya, bukan dijual berlebihan
- Stack, ditulis sebagai daftar biasa dipisah koma, bukan badge warna-warni
- Link "Lihat detail" kalau ada repo/demo, atau catatan "kode tugas kampus, tidak publik" kalau memang privat — jujur lebih baik daripada disembunyikan

Contoh entri (placeholder, isi dengan detail proyek asli):

```
2023.09
Sistem inventaris barang — tugas akhir SMK
Dibuat buat ngelola stok barang di lab sekolah. Backend Laravel,
database MySQL, di-deploy manual ke VPS kampus buat presentasi.
Stack: Laravel, MySQL, Bootstrap
Lihat detail
```

**Stack** — daftar flat bahasa, framework, tools. Tanpa ikon berwarna-warni, tanpa progress bar skill level (itu juga tell generik).

**Tentang** — satu paragraf pendek, orang pertama. Ceritakan perjalanan belajar backend, termasuk cara kerja sehari-hari yang melibatkan AI sebagai alat, bukan pengganti pemahaman.

**Kontak** — email, GitHub, LinkedIn (kalau ada) ditulis sebagai teks/link biasa, bukan tombol besar mengkilap.

## Motion

Satu momen animasi saja: baris `$ whoami` di hero mengetik sendiri sekali saat halaman dimuat, lalu berhenti. Tidak ada animasi berulang, tidak ada fade-slide-up per section, tidak ada hover-lift di tiap entri log. Hover state cukup underline halus pada link, transisi singkat (150ms).

## Menulis untuk proyek sekolah/kuliah

Proyek dari tugas SMK dan kuliah tetap layak ditampilkan penuh, asal ditulis jujur:

- Sebutkan konteksnya (tugas apa, dari siapa, untuk apa) — ini bukti kemampuan kerja dalam batasan nyata, bukan kelemahan yang perlu ditutupi.
- Fokus ke keputusan teknis yang diambil, bukan sekadar daftar fitur.
- Boleh tambahkan satu kalimat reflektif, misalnya apa yang sekarang akan dilakukan berbeda. Itu menunjukkan pertumbuhan.
- Hindari kata-kata jualan seperti "revolusioner", "cutting-edge", "game-changing".

## Aksesibilitas dan teknis untuk Stitch

- Kontras teks terhadap Fog/Paper minimal AA (rasio 4.5:1 untuk body).
- Focus ring pakai Signal Amber, terlihat jelas saat navigasi keyboard.
- Breakpoint: mobile di bawah 640px, tablet 640–1024px, desktop di atas 1024px. Layout tetap satu kolom di semua ukuran, hanya lebar dan ukuran font yang menyesuaikan.
- Respect `prefers-reduced-motion` — kalau aktif, animasi ketik di hero langsung tampil penuh tanpa efek.

## Ringkasan prompt untuk Stitch

Kalau butuh satu paragraf padat buat ditempel langsung ke Stitch:

> Portofolio satu halaman untuk backend web developer, rata kiri, satu kolom, lebar konten maksimal 720px. Palet warna: background `#EDEFEA`, surface `#F7F8F4`, teks `#1B2119`, aksen utama amber `#D9A62A`, aksen sekunder teal `#2C5262`, garis pembatas `#D2D5CB`. Font Archivo untuk heading dan body, JetBrains Mono hanya untuk baris command line dan tanggal. Hero berisi dua baris pernyataan singkat plus satu baris command line `$ whoami` yang mengetik sendiri sekali saat dimuat. Section utama berjudul "Log proyek" berisi daftar proyek kronologis bertanggal asli (format 2023.09), dipisah garis hairline tipis, bukan kartu dengan shadow atau radius besar. Tidak ada label ALL CAPS, tidak ada metadata dengan titik tengah, tidak ada tanda panah di teks tombol, tidak ada gradient dekoratif. Section tambahan: Stack (daftar flat), Tentang (satu paragraf), Kontak (teks/link biasa). Hover state minimal, hanya underline halus pada link.
