# XinnStore

Project top up website berbasis Next.js App Router.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`

## Fitur
- Homepage sederhana
- Daftar produk dengan search dan filter kategori
- Detail produk dengan form checkout
- Mock transaksi dengan ID otomatis
- Cek status transaksi
- Data produk lokal dari JSON

## Struktur penting
- `app/` halaman utama
- `components/` komponen reusable
- `data/products.json` data produk
- `lib/transaction.ts` logic mock transaksi
