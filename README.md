# SOJI — 7th Anniversary Website

Website satu halaman (one-page) untuk perayaan 7 tahun **SOJI Skin Clinic & Library**.
Dibangun dengan HTML + CSS + JavaScript murni — tanpa framework, tanpa build step.
Cukup buka `index.html` di browser.

---

## Cara ganti isi website

**Semua teks ada di satu file:** `assets/js/content.js`

Buka file itu, cari tanda `⬅ GANTI`, lalu tulis ulang isinya. Tidak perlu menyentuh
HTML atau CSS sama sekali. Simpan, refresh browser, selesai.

### Checklist data yang masih placeholder

| Bagian | Yang perlu diisi |
|---|---|
| `brand` | Tahun berdiri (`periode`) dan kota |
| `prolog` | Narasi pembuka — ambil dari dokumen *Story SOJI 7th Anniversary* |
| `timeline` | Cerita tiap tahun (Babak 1–7) + tahunnya |
| `milestones` | **Angka masih contoh** — jumlah klien, treatment, dsb. |
| `services` | Daftar layanan & harga/durasi yang sebenarnya |
| `voices` | Testimoni asli klien |
| `anniversary` | Promo perayaan yang benar-benar berjalan |
| `contact` | Alamat, jam buka, WhatsApp, Instagram, TikTok, email |

> Catatan: angka di bagian *Tujuh tahun dalam angka* sengaja diisi contoh.
> Hapus baris `note:` di `milestones` setelah angkanya diganti dengan data asli.

---

## Struktur folder

```
index.html              ← kerangka halaman
promo/index.html        ← halaman promo 7th Anniversary (berdiri sendiri)
assets/
  css/style.css         ← seluruh styling & brand token
  js/content.js         ← ISI WEBSITE (edit di sini)
  js/main.js            ← render + animasi
  img/                  ← foto, logo SOJI, dan gambar preview link
```

## Halaman promo: `/promo`

`promo/index.html` adalah halaman terpisah berisi daftar promo 7th Anniversary
(harga, paket, dan tombol booking WhatsApp). Dibuat untuk dibagikan sebagai satu
link pendek di bio Instagram, caption TikTok, atau broadcast WhatsApp.

Setelah di-deploy, alamatnya: `https://<nama-situs>.netlify.app/promo`

Halaman ini **tidak** mengambil isi dari `content.js` — semua teks dan harga ada
langsung di dalam `promo/index.html`, supaya promo bisa diganti tanpa menyentuh
situs utama. Cari bagian `<article class="promo">` untuk tiap paket.

### Periode promo

Berjalan **25 Oktober – 5 Desember 2026**. Halaman menampilkan hitung mundur yang
berjalan sendiri, dan otomatis berganti jadi *"periode promo sudah berakhir"*
lewat tanggal itu.

Kalau periodenya diperpanjang, ada **tiga** tempat yang perlu diubah di
`promo/index.html`:

1. `<span class="dates">` di hero — tanggal singkat
2. `new Date("2026-12-05T23:59:59+07:00")` di blok `<script>` — batas hitung mundur
3. paragraf `.terms` di bagian bawah — tanggal lengkap

### Yang masih perlu diisi

| Yang perlu diisi | Letaknya |
|---|---|
| URL absolut gambar preview | `<meta property="og:image">` di `<head>`, tandanya `⬅ GANTI` |

> Gambar preview link (`assets/img/og-promo.jpg`) adalah yang muncul saat link
> dibagikan di WhatsApp. WhatsApp lebih patuh kalau alamatnya ditulis lengkap,
> jadi ganti `/assets/img/og-promo.jpg` jadi `https://<nama-situs>.netlify.app/assets/img/og-promo.jpg`
> begitu domainnya final.

## Brand token (warna & font)

Ada di bagian paling atas `assets/css/style.css`:

```css
--cream:  #FBF7F2;   /* latar ivory hangat   */
--ink:    #2A211C;   /* espresso, teks utama */
--gold:   #B98E4C;   /* aksen emas lembut    */
--blush:  #E9D4C6;   /* rona kulit           */
--sage:   #8D9C87;   /* hijau tenang         */
```

Font: *Cormorant Garamond* (judul) + *Plus Jakarta Sans* (teks).
Ganti satu nilai di situ, seluruh halaman ikut berubah.

Mode gelap sudah ikut: halaman menyesuaikan tema perangkat secara otomatis.

## Menambahkan foto

1. Taruh file di `assets/img/`.
2. Panggil dari CSS, misalnya untuk latar hero:
   ```css
   .hero { background: url("../img/klinik.jpg") center/cover; }
   ```

## Publikasi

**Netlify (disarankan)** — konfigurasinya sudah ada di `netlify.toml`, tanpa
build step. Di [app.netlify.com](https://app.netlify.com): *Add new site* →
*Import an existing project* → pilih GitHub → repo `peisilia/bedah-skincare` →
pilih branch ini → *Deploy*. Setiap push ke branch tersebut otomatis ter-deploy
ulang.

Hasilnya dua alamat:

| Halaman | Alamat |
|---|---|
| Cerita 7 tahun | `https://<nama-situs>.netlify.app/` |
| Promo anniversary | `https://<nama-situs>.netlify.app/promo` |

Nama situs bisa diganti di *Site configuration → Change site name*.

**Tanpa akun GitHub** — drag folder ini ke [netlify.com/drop](https://app.netlify.com/drop).

**GitHub Pages** — Settings → Pages → Source: `Deploy from a branch` →
pilih branch ini → folder `/ (root)` → Save.

## Dukungan browser

Chrome, Safari, Firefox, dan Edge versi terbaru. Responsif dari layar HP
sampai desktop, dan menghormati pengaturan *reduce motion*.
