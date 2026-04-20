'use client';

import { useMemo, useState } from 'react';
import DenominationSelector from '@/components/DenominationSelector';
import OrderSummary from '@/components/OrderSummary';
import PaymentSelector from '@/components/PaymentSelector';
import { createTransaction } from '@/lib/transaction';
import type { Product } from '@/lib/utils';

export default function OrderForm({ product }: { product: Product }) {
  const [userId, setUserId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [selectedDenomination, setSelectedDenomination] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ id: string; status: string } | null>(null);
  const [error, setError] = useState('');

  const denomination = useMemo(
    () => product.denominations.find((item) => item.name === selectedDenomination),
    [product.denominations, selectedDenomination]
  );

  const isValid = Boolean(userId.trim() && denomination && paymentMethod);

  async function handleCheckout() {
    if (!isValid || !denomination) {
      setError('Lengkapi User ID, nominal, dan metode pembayaran terlebih dahulu.');
      return;
    }

    setError('');
    setLoading(true);
    setResult(null);

    try {
      const transaction = await createTransaction({
        productName: product.name,
        denominationName: denomination.name,
        total: denomination.price,
        userId: userId.trim(),
        zoneId: zoneId.trim(),
        paymentMethod
      });

      setResult({ id: transaction.id, status: transaction.status });
    } catch {
      setError('Terjadi kesalahan saat membuat transaksi.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
      <div className="card p-5 sm:p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-white">1. Data Akun</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input
                className="field"
                placeholder="Masukkan User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <input
                className="field"
                placeholder="Masukkan Zone ID (opsional)"
                value={zoneId}
                onChange={(e) => setZoneId(e.target.value)}
              />
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">2. Pilih Nominal</h2>
            <div className="mt-4">
              <DenominationSelector
                options={product.denominations}
                value={selectedDenomination}
                onChange={setSelectedDenomination}
              />
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">3. Pilih Pembayaran</h2>
            <div className="mt-4">
              <PaymentSelector value={paymentMethod} onChange={setPaymentMethod} />
            </div>
          </section>

          {error ? <p className="text-sm text-rose-400">{error}</p> : null}

          <button type="button" onClick={handleCheckout} disabled={!isValid || loading} className="btn-primary w-full">
            {loading ? 'Memproses...' : 'Checkout Sekarang'}
          </button>

          {result ? (
            <div className="rounded-2xl border border-emerald-700/40 bg-emerald-500/10 p-4 text-sm text-emerald-300">
              <p className="font-semibold">Transaksi berhasil dibuat.</p>
              <p className="mt-1">ID: {result.id}</p>
              <p>Status: {result.status}</p>
            </div>
          ) : null}
        </div>
      </div>

      <OrderSummary
        productName={product.name}
        denominationName={denomination?.name}
        total={denomination?.price}
        paymentMethod={paymentMethod}
      />
    </div>
  );
}
