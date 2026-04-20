import Link from 'next/link';
import ProductList from '@/components/ProductList';
import productsData from '@/data/products.json';
import type { Product } from '@/lib/utils';

const products = productsData as Product[];
const featured = products.slice(0, 8);

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-slate-800">
        <div className="container-shell py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
              XinnStore
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Top Up Cepat, Aman, dan Anti Ribet
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
              Website top up game dan produk digital dengan alur checkout singkat, data produk siap pakai, dan mock transaksi langsung jalan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                Lihat Semua Produk
              </Link>
              <Link href="/check" className="btn-secondary">
                Cek Transaksi
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Produk Unggulan</h2>
            <p className="mt-1 text-sm text-slate-400">Pilihan produk terlaris untuk kebutuhan top up digital.</p>
          </div>
          <Link href="/products" className="text-sm font-medium text-brand-300 hover:text-brand-200">
            Lihat semua
          </Link>
        </div>
        <ProductList products={featured} />
      </section>

      <section className="container-shell pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Checkout cepat', 'Flow dibuat singkat agar user langsung transaksi tanpa langkah berlebihan.'],
            ['Metode bayar umum', 'QRIS, DANA, OVO, GoPay, dan transfer bank sudah disiapkan.'],
            ['Mudah dikembangkan', 'Semua memakai data JSON lokal dan komponen modular.']
          ].map(([title, desc]) => (
            <div key={title} className="card p-5">
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
