'use client';

import { cx, formatPrice } from '@/lib/utils';

type Denomination = {
  name: string;
  price: number;
};

export default function DenominationSelector({
  options,
  value,
  onChange
}: {
  options: Denomination[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((item) => (
        <button
          key={item.name}
          type="button"
          onClick={() => onChange(item.name)}
          className={cx(
            'rounded-2xl border p-4 text-left transition',
            value === item.name
              ? 'border-brand-500 bg-brand-500/10'
              : 'border-slate-800 bg-slate-900 hover:border-slate-600'
          )}
        >
          <div className="font-medium text-white">{item.name}</div>
          <div className="mt-1 text-sm text-slate-400">{formatPrice(item.price)}</div>
        </button>
      ))}
    </div>
  );
}
