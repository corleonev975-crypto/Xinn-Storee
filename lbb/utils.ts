export function formatPrice(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value);
}

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export type Product = {
  id: number;
  name: string;
  slug: string;
  category: 'game' | 'voucher';
  denominations: Array<{
    name: string;
    price: number;
  }>;
};

export type TransactionRecord = {
  id: string;
  status: 'pending' | 'success';
  productName: string;
  denominationName: string;
  total: number;
  userId: string;
  zoneId?: string;
  paymentMethod: string;
  createdAt: string;
};
