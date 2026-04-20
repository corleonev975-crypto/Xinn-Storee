'use client';

import { useMemo, useState } from 'react';
import ProductList from '@/components/ProductList';
import productsData from '@/data/products.json';
import type { Product } from '@/lib/utils';

const products = productsData as Product[];

export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'all' | 'game' | 'voucher'>('all');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' ? true : product.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <main className="container-shell py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Semua Produk</h1>
        <p className="mt-2 text-sm text-slate-400">Cari game, voucher, dan produk digital yang ingin kamu top up.</p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
        <input
          className="field"
          placeholder="Cari produk..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select className="field md:w-52" value={category} onChange={(e) => setCategory(e.target.value as 'all' | 'game' | 'voucher')}>
          <option value="all">Semua Kategori</option>
          <option value="game">Game</option>
          <option value="voucher">Voucher</option>
        </select>
      </div>

      <ProductList products={filteredProducts} />
    </main>
  );
}
