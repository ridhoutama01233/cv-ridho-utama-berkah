[README.md](https://github.com/user-attachments/files/28590831/README.md)
# CV. Ridho Utama Berkah - Website Distributor Kopi V2

Versi ini dibuat ulang dengan arah visual dark coffee, premium, corporate, dan modern UI/UX.

## File utama

- `index.html` - halaman utama
- `contact.html` - halaman kontak dan inquiry B2B
- `success.html` - halaman sukses form
- `assets/css/styles.css` - seluruh styling desktop dan mobile
- `assets/js/main.js` - animasi, mobile menu, reveal, tilt, prefill produk
- `assets/images/` - logo, favicon, hero image, og image
- `robots.txt` dan `sitemap.xml` - kebutuhan SEO dasar
- `.nojekyll` - agar GitHub Pages membaca folder assets dengan aman

## Fitur UI/UX V2

- Tema dark coffee premium
- Warna kopi, caramel, crema, teal corporate
- Sticky glass navbar
- Mobile menu responsive
- Scroll progress bar
- Scroll reveal animation
- Floating coffee beans
- Animated marquee
- Hover tilt card
- Magnetic button effect
- Cursor glow effect di desktop
- Google Maps embed
- Contact page terpisah
- B2B inquiry form
- SEO meta title dan description
- Open Graph image untuk share link
- Schema markup Organization

## Yang perlu diganti sebelum publish

Cari dan ganti placeholder berikut:

1. `domain-anda.com`
   - Ada di `index.html`, `contact.html`, `robots.txt`, dan `sitemap.xml`.

2. Nomor WhatsApp placeholder
   - Cari `6281234567890` di `contact.html`.
   - Ganti dengan nomor WhatsApp bisnis format internasional.
   - Contoh: `6281260000000`.

3. Email placeholder
   - Cari `info@domain-anda.com`.
   - Ganti dengan email resmi perusahaan.

4. Social media
   - Cari bagian `Social Media` di `index.html` dan `contact.html`.
   - Ganti `href="#"` dengan link Facebook, Instagram, TikTok, dan Twitter(X) asli.

5. Data produk
   - Di section produk, ganti nama kopi, origin, grade, flavor notes, harga, dan availability sesuai data asli.

6. Google Maps
   - Saat perusahaan punya link Google Maps resmi, ganti iframe map dengan embed dari pin resmi.

## Deploy GitHub Pages

1. Upload semua file ke root repository.
2. Buka repository GitHub.
3. Masuk ke Settings > Pages.
4. Source: Deploy from a branch.
5. Branch: `main` dan folder `/root`.
6. Save.
7. Tunggu link GitHub Pages aktif.

## Catatan form kontak

Form inquiry memakai atribut Netlify Forms:

```html
<form name="coffee-inquiry" method="POST" action="success.html" data-netlify="true">
```

Form akan bisa menangkap submission jika deploy di Netlify.

Kalau deploy di GitHub Pages, form HTML tetap tampil, tetapi tidak mengirim data ke email/server. Untuk GitHub Pages, sambungkan form ke salah satu layanan ini:

- Formspree
- Getform
- EmailJS
- Basin
- Backend sendiri

Tombol WhatsApp tetap bisa digunakan setelah nomor diganti.
