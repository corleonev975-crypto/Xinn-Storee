import { formatPrice } from '@/lib/utils';

type SummaryProps = {
  productName: string;
  denominationName?: string;
  total?: number;
  paymentMethod?: string;
};

export default function OrderSummary({ productName, denominationName, total, paymentMethod }: SummaryProps) {
  return (
    <div className="card p-5">
      <h3 className="text-base font-semibold text-white">Ringkasan Order</h3>
      <div className="mt-4 space-y-3 text-sm text-slate-300">
        <div className="flex items-center justify-between gap-4">
          <span>Produk</span>
          <span className="text-right text-white">{productName}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span>Nominal</span>
          <span className="text-right text-white">{denominationName ?? '-'}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span>Pembayaran</span>
          <span className="text-right text-white">{paymentMethod ?? '-'}</span>
        </div>
        <div className="border-t border-slate-800 pt-3">
          <div className="flex items-center justify-between gap-4 font-semibold">
            <span>Total</span>
            <span className="text-brand-300">{typeof total === 'number' ? formatPrice(total) : '-'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
