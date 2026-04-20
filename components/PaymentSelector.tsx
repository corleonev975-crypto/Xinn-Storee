'use client';

import { cx } from '@/lib/utils';

export const PAYMENT_METHODS = ['QRIS', 'DANA', 'OVO', 'GoPay', 'Bank Transfer'];

export default function PaymentSelector({
  value,
  onChange
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {PAYMENT_METHODS.map((method) => (
        <button
          key={method}
          type="button"
          onClick={() => onChange(method)}
          className={cx(
            'rounded-2xl border p-4 text-left transition',
            value === method
              ? 'border-brand-500 bg-brand-500/10 text-white'
              : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-600'
          )}
        >
          {method}
        </button>
      ))}
    </div>
  );
}
