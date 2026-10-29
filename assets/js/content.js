/* =============================================================
   SOJI — 7th Anniversary
   SATU-SATUNYA FILE YANG PERLU DIEDIT UNTUK GANTI ISI WEBSITE.

   Tanda  ⬅ GANTI  = masih placeholder, isi dengan data asli
   dari dokumen "Story SOJI 7th Anniversary".
   ============================================================= */

window.SOJI_CONTENT = {

  /* ---------- IDENTITAS BRAND ---------- */
  brand: {
    name: "SOJI",
    tagline: "Skin Clinic & Library",
    years: 7,
    periode: "2019 — 2026",            // ⬅ GANTI kalau tahun berdirinya beda
    kota: "Bandung · Tasikmalaya",     // ⬅ GANTI
  },

  /* ---------- MENU NAVIGASI ---------- */
  nav: [
    { label: "Cerita",     href: "#cerita" },
    { label: "Perjalanan", href: "#perjalanan" },
    { label: "Filosofi",   href: "#filosofi" },
    { label: "Layanan",    href: "#layanan" },
    { label: "Suara Klien",href: "#suara" },
    { label: "Anniversary",href: "#anniversary" },
  ],

  /* ---------- HERO ---------- */
  hero: {
    eyebrow: "7th Anniversary",
    title: "Tujuh tahun merawat kulit,\nmerawat cerita.",
    body: "Tujuh tahun bukan soal berapa banyak wajah yang kami rawat, tapi berapa banyak orang yang akhirnya berhenti menebak-nebak dan mulai mengerti kulitnya sendiri.",
    ctaPrimary:   { label: "Baca cerita kami", href: "#cerita" },
    ctaSecondary: { label: "Konsultasi sekarang", href: "#kontak" },
  },

  /* ---------- PROLOG / OPENING STORY ---------- */
  prolog: {
    eyebrow: "Dari mana semuanya dimulai",
    title: "Berawal dari satu pertanyaan yang tidak pernah terjawab",
    // ⬅ GANTI seluruh paragraf di bawah dengan narasi asli dari PDF
    paragraphs: [
      "Dulu, hampir setiap orang yang datang membawa pertanyaan yang sama: “skincare-ku salah di mana, ya?” Mereka sudah mencoba banyak produk, mengikuti banyak rekomendasi, dan tetap merasa kulitnya tidak ke mana-mana.",
      "SOJI lahir dari keresahan itu. Bukan untuk menjual lebih banyak produk, tapi untuk memperpendek jarak antara orang dan pemahaman tentang kulitnya sendiri.",
      "Maka kami mulai dari hal yang paling sederhana: mendengarkan dulu, baru merawat.",
    ],
    pull: "Kulit tidak butuh dipaksa. Kulit butuh dimengerti.",
  },

  /* ---------- TIMELINE 7 TAHUN ---------- */
  // ⬅ GANTI judul & isi tiap babak dengan cerita per tahun dari PDF
  timeline: {
    eyebrow: "Perjalanan",
    title: "Tujuh babak yang membentuk SOJI",
    items: [
      { year: "2019", tag: "Babak 1", title: "Ruang pertama",
        body: "Satu ruang kecil, satu bed treatment, dan keyakinan bahwa edukasi harus datang lebih dulu sebelum penjualan." },
      { year: "2020", tag: "Babak 2", title: "Bertahan, lalu belajar",
        body: "Tahun yang memaksa semua orang berhenti. Kami memakainya untuk membenahi standar, protokol, dan cara kami menjelaskan sesuatu." },
      { year: "2021", tag: "Babak 3", title: "Konsultasi jadi inti",
        body: "Kami berhenti menjual paket. Setiap klien mulai dari pemetaan kondisi kulit, bukan dari daftar harga." },
      { year: "2022", tag: "Babak 4", title: "Lahirnya Skin Trial",
        body: "Coba dulu, rasakan dulu, baru lanjut. Sebuah cara agar tidak ada lagi yang membeli perawatan hanya karena terbujuk." },
      { year: "2023", tag: "Babak 5", title: "SOJI Library",
        body: "Perpustakaan skincare: tempat orang boleh membaca, bertanya, dan mengerti tanpa harus membeli apa pun hari itu." },
      { year: "2024", tag: "Babak 6", title: "Tim yang bertumbuh",
        body: "SOP, pelatihan, dan standar pelayanan yang sama di setiap tangan therapist. Konsistensi adalah bentuk hormat pada klien." },
      { year: "2025", tag: "Babak 7", title: "Kelas & komunitas",
        body: "Edukasi keluar dari ruang klinik: kelas offline, sesi tanya jawab, dan komunitas yang saling menguatkan." },
    ],
  },

  /* ---------- ANGKA / MILESTONE ---------- */
  // ⬅ GANTI SEMUA ANGKA DI BAWAH DENGAN DATA ASLI (sekarang masih contoh)
  milestones: {
    eyebrow: "Tujuh tahun dalam angka",
    note: "*Angka di bawah masih contoh — ganti di assets/js/content.js",
    items: [
      { value: 7,    suffix: "",  label: "Tahun berjalan" },
      { value: 5000, suffix: "+", label: "Klien dirawat" },
      { value: 20,   suffix: "+", label: "Jenis treatment" },
      { value: 98,   suffix: "%", label: "Klien kembali" },
    ],
  },

  /* ---------- FILOSOFI / PILAR ---------- */
  pillars: {
    eyebrow: "Filosofi",
    title: "Empat hal yang tidak kami tawar",
    items: [
      { no: "01", title: "Dengarkan dulu",
        body: "Setiap perawatan dimulai dari konsultasi, bukan dari katalog. Kami perlu tahu ceritanya sebelum menyentuh kulitnya." },
      { no: "02", title: "Skin Trial",
        body: "Kulit setiap orang berbeda. Coba dalam skala kecil, lihat responsnya, baru lanjut ke program penuh." },
      { no: "03", title: "SOJI Library",
        body: "Perpustakaan skincare untuk siapa pun yang ingin mengerti bahan, urutan, dan logika di balik rutinitasnya." },
      { no: "04", title: "Edukasi, bukan janji",
        body: "Kami tidak menjanjikan instan. Kami menjelaskan prosesnya, supaya kamu tahu apa yang sedang kamu lakukan pada kulitmu." },
    ],
  },

  /* ---------- LAYANAN ---------- */
  // ⬅ GANTI daftar layanan & deskripsinya sesuai menu SOJI yang sebenarnya
  services: {
    eyebrow: "Layanan",
    title: "Apa yang bisa kamu mulai hari ini",
    items: [
      { name: "Konsultasi Kulit",  desc: "Pemetaan kondisi kulit dan penyusunan rencana perawatan personal.", meta: "±45 menit" },
      { name: "Skin Trial",        desc: "Perawatan percobaan untuk melihat respons kulit sebelum ambil program.", meta: "Sekali datang" },
      { name: "Facial Treatment",  desc: "Rangkaian facial yang disesuaikan dengan kondisi dan target kulit.", meta: "±60 menit" },
      { name: "Acne Program",      desc: "Program bertahap untuk kulit berjerawat, dengan evaluasi berkala.", meta: "Program" },
      { name: "SOJI Library",      desc: "Akses baca, tanya, dan diskusi soal skincare tanpa tekanan membeli.", meta: "Gratis" },
      { name: "Kelas Edukasi",     desc: "Kelas offline untuk memahami kulit sendiri dari dasar.", meta: "Batch" },
    ],
  },

  /* ---------- TESTIMONI ---------- */
  // ⬅ GANTI dengan testimoni asli (nama boleh disingkat)
  voices: {
    eyebrow: "Suara klien",
    title: "Yang mereka bawa pulang",
    items: [
      { quote: "Baru di SOJI aku dijelasin kenapa kulitku begitu, bukan cuma disuruh beli.", name: "R.", meta: "Klien sejak 2021" },
      { quote: "Skin Trial-nya bikin tenang. Nggak langsung disuruh ambil paket besar.", name: "A.", meta: "Klien sejak 2023" },
      { quote: "Tempatnya nyaman, timnya sabar jawab pertanyaan sedetail apa pun.", name: "N.", meta: "Klien sejak 2022" },
    ],
  },

  /* ---------- PROMO ANNIVERSARY ---------- */
  // ⬅ GANTI dengan promo anniversary yang sebenarnya
  anniversary: {
    eyebrow: "Perayaan",
    title: "7 Tahun, 7 Cara Berterima Kasih",
    body: "Sebagai bentuk terima kasih untuk tujuh tahun kepercayaan, kami menyiapkan beberapa hal kecil untuk kamu yang datang di periode perayaan ini.",
    periode: "Berlaku sepanjang bulan perayaan",   // ⬅ GANTI
    items: [
      { title: "Diskon 7%",            desc: "Untuk seluruh treatment selama periode perayaan." },
      { title: "Skin Trial 7K",        desc: "Coba perawatan pertama dengan harga perayaan." },
      { title: "Gratis Konsultasi",    desc: "Pemetaan kulit tanpa biaya untuk klien baru." },
      { title: "Bonus Home Care",      desc: "Produk perawatan rumah untuk pembelian program." },
      { title: "Kelas Terbuka",        desc: "Satu sesi kelas edukasi gratis untuk komunitas." },
      { title: "Member Reward",        desc: "Poin ganda untuk klien yang sudah bersama sejak awal." },
      { title: "Referral Bareng",      desc: "Ajak satu teman, kalian berdua dapat benefit." },
    ],
    cta: { label: "Ambil penawarannya", href: "#kontak" },
  },

  /* ---------- PENUTUP ---------- */
  closing: {
    title: "Terima kasih sudah menua bersama kami.",
    body: "Tujuh tahun ini milik setiap orang yang pernah duduk, bertanya, dan mempercayakan kulitnya pada SOJI.",
    cta: { label: "Mulai cerita kamu", href: "#kontak" },
  },

  /* ---------- KONTAK & FOOTER ---------- */
  // ⬅ GANTI semua data kontak di bawah
  contact: {
    eyebrow: "Kontak",
    title: "Datang, atau mulai dari satu pesan",
    alamat: "Jl. Contoh No. 7, Bandung",
    jam: "Senin – Sabtu · 09.00 – 18.00 WIB",
    whatsapp: { label: "+62 812-0000-0000", href: "https://wa.me/628120000000" },
    instagram:{ label: "@soji.skincare",     href: "https://instagram.com/" },
    tiktok:   { label: "@soji.skincare",     href: "https://tiktok.com/" },
    email:    { label: "halo@soji.id",       href: "mailto:halo@soji.id" },
  },
};
