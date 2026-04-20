import Link from 'next/link';
import type { Product } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product }: { product: Product }) {
  const minPrice = Math.min(...product.denominations.map((item) => item.price));

  return (
    <Link href={`/product/${product.slug}`} className="card block p-5 transition hover:border-brand-500">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="rounded-full border border-slate-700 px-2 py-1 text-xs uppercase tracking-wide text-slate-400">
          {product.category}
        </span>
        <span className="text-xs text-slate-500">{product.denominations.length} pilihan</span>
      </div>
      <h3 className="text-lg font-semibold text-white">{product.name}</h3>
      <p className="mt-2 text-sm text-slate-400">Mulai dari {formatPrice(minPrice)}</p>
    </Link>
  );
}
