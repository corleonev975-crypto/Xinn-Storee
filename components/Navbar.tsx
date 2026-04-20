import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          XinnStore
        </Link>
        <nav className="flex items-center gap-2 text-sm text-slate-300 sm:gap-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/products" className="hover:text-white">Produk</Link>
          <Link href="/check" className="hover:text-white">Cek Transaksi</Link>
        </nav>
      </div>
    </header>
  );
}
