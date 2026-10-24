# Static — NexusTech Landing Page

Landing page **satu halaman (one-page)** untuk agensi software engineering fiktif "NexusTech". Murni HTML + CSS + JavaScript (tanpa PHP, tanpa database), sehingga bisa di-host di server statis apa pun.

## Live Preview (XAMPP)

```
http://localhost/My_Porto/Static/
```

## Bagian Halaman

| Section | ID | Isi |
|---|---|---|
| Hero | `#hero` | Headline + CTA, kartu glass "Innovation Engine" dengan floating tech badge (React, Python, AWS), dekorasi bentuk blur |
| About | `#about` | Profil perusahaan, statistik (50+ proyek, 99% kepuasan), 3 keunggulan (Innovative Approach, Secure by Design, Rapid Scaling) |
| Services | `#services` | 3 kartu layanan: Web Engineering, Mobile Apps, Cloud Solutions |
| Testimonials | `#testimonials` | Bootstrap carousel berisi 2 testimoni klien |
| Contact | `#contact` | Info kontak (email, WhatsApp, alamat) + form inquiry |
| Footer | — | Sosial media + tahun otomatis |

## Teknologi

- **Bootstrap 5.3** (CDN) — grid, navbar, carousel, alert
- **Font Awesome 6.4** (CDN) — ikon
- **Google Fonts** — Outfit (heading) & Inter (body)
- **AOS 2.3.1** — animasi saat scroll
- `assets/css/style.css` — tema, glassmorphism, gradient, komponen kustom
- `assets/js/main.js` — navbar sticky saat scroll, smooth scroll, tahun footer dinamis, pengiriman form kontak

## Fitur Interaktif (`assets/js/main.js`)

1. **Navbar sticky** — menambah kelas `navbar-scrolled` setelah 50px scroll.
2. **Smooth scroll** — offset otomatis setinggi navbar, dan otomatis menutup menu mobile setelah diklik.
3. **Tahun footer** — diisi `new Date().getFullYear()` agar tidak perlu diperbarui manual.
4. **Form kontak berfungsi** — karena situs ini statis (tanpa backend), isi form dikomposisikan menjadi pesan WhatsApp dan dibuka via `window.open('https://wa.me/...')`, disertai state loading dan notifikasi sukses.

## SEO & Metadata

Halaman sudah dilengkapi: `<title>`, meta description & keywords, canonical, Open Graph (Facebook/WhatsApp), Twitter Card, `robots` index/follow, serta **structured data Schema.org `Organization`** (JSON-LD) berisi kontak dan tautan sosial.

> Untuk deployment, ubah `http://localhost/My_Porto/Static/` pada `<link rel="canonical">`, `og:url`, `twitter:url`, dan `url` di JSON-LD menjadi domain produksi.

## Menjalankan

Cukup buka `index.html`, atau jalankan server statis:

```bash
# Dari direktori proyek
php -S localhost:8002
# lalu buka http://localhost:8002
```

## Struktur

```
Static/
├── index.html              # Seluruh halaman (one-page)
├── README.md
└── assets/
    ├── css/style.css       # Tema & komponen kustom
    ├── js/main.js          # Interaksi: navbar, smooth scroll, form, tahun
    └── img/favicon.png
```

## Catatan

- Alamat email, nomor WhatsApp, dan lokasi pada halaman ini sudah diisi dengan data kontak pemilik portofolio (`jihadprakoso@gmail.com`, +62 857-7383-7959, Jakarta — Indonesia).
- Form kontak tidak mengirim ke server/email; aksinya membuka WhatsApp agar pesan tetap sampai tanpa backend.
