# Website Pribadi Whimsical

Website pribadi satu halaman bertema whimsical (ceria dan penuh keajaiban), dibuat hanya dengan **HTML, CSS, dan Vanilla JavaScript**. Tanpa framework, tanpa proses build.

## Fitur

- Makhluk lucu di bagian atas yang matanya **mengikuti kursor**
- Klik makhluk itu untuk memunculkan **fakta acak** tentang dirimu
- Latar malam berbintang dengan bintang yang berkedip pelan
- Bagian-bagian berbentuk organik dengan warna berbeda
- Responsif untuk ponsel, ada fokus keyboard yang jelas, dan menghormati pengaturan *reduced motion*

## Struktur File

```
website-whimsical/
├── index.html   # Isi dan struktur halaman
├── style.css    # Tampilan, warna, dan animasi
├── script.js    # Bintang, mata bergerak, fakta acak
└── README.md    # Panduan ini
```

## Cara Menjalankan

1. Simpan keempat file dalam satu folder.
2. Klik dua kali `index.html` untuk membukanya di browser.

Selesai. Tidak perlu instalasi apa pun.

## Cara Menyesuaikan

**Ganti identitas dan teks**
Buka `index.html`, lalu cari dan ganti: `Nama Kamu`, `Kota Kamu`, paragraf di bagian *Tentang aku*, daftar di *Yang aku suka* dan *Yang aku bisa* (cukup ubah isi tag `<li>`), serta tautan di bagian *Kontak* (`emailkamu@contoh.com`, `usernamekamu`).

**Ganti fakta acak**
Buka `script.js` dan ubah isi array `facts` di bagian atas file.

**Ganti warna**
Buka `style.css` dan ubah nilai di blok `:root` paling atas, misalnya `--butter`, `--mint`, `--sky`, dan `--pink`.

**Ganti font**
Font memakai Fraunces dan Nunito dari Google Fonts, jadi butuh koneksi internet. Tanpa internet, browser otomatis memakai font cadangan (Georgia dan Trebuchet MS), sehingga tampilan tetap rapi.

## Publikasi Gratis (GitHub Pages)

1. Buat repositori baru di GitHub dan unggah keempat file.
2. Buka **Settings → Pages**.
3. Pada *Branch*, pilih `main` dan folder `/ (root)`, lalu simpan.
4. Tunggu beberapa menit, dan website kamu bisa dibuka lewat tautan yang diberikan GitHub.

## Lisensi

Bebas dipakai dan diubah untuk keperluan pribadimu.
