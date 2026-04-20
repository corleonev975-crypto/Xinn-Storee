'use client';

import { useState } from 'react';
import { lookupTransactionStatus } from '@/lib/transaction';

export default function CheckPage() {
  const [transactionId, setTransactionId] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleCheck() {
    setSubmitted(true);
    if (!transactionId.trim()) {
      setStatus(null);
      return;
    }
    setStatus(lookupTransactionStatus(transactionId.trim()));
  }

  return (
    <main className="container-shell py-10">
      <div className="mx-auto max-w-2xl card p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-white">Cek Transaksi</h1>
        <p className="mt-2 text-sm text-slate-400">
          Masukkan ID transaksi untuk melihat status mock transaksi kamu.
        </p>

        <div className="mt-6 space-y-4">
          <input
            className="field"
            placeholder="Contoh: XIN-171234567890-AB12CD"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          <button type="button" onClick={handleCheck} className="btn-primary w-full">
            Cek Sekarang
          </button>

          {submitted && !transactionId.trim() ? (
            <p className="text-sm text-rose-400">ID transaksi wajib diisi.</p>
          ) : null}

          {status ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-sm text-slate-300">
              <p className="font-medium text-white">Status transaksi</p>
              <p className="mt-2 uppercase tracking-wide text-brand-300">{status}</p>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
