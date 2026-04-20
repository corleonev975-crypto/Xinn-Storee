import type { TransactionRecord } from '@/lib/utils';

export type CreateTransactionInput = {
  productName: string;
  denominationName: string;
  total: number;
  userId: string;
  zoneId?: string;
  paymentMethod: string;
};

export function generateTransactionId(): string {
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `XIN-${Date.now()}-${random}`;
}

export async function createTransaction(data: CreateTransactionInput): Promise<TransactionRecord> {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return {
    id: generateTransactionId(),
    status: 'success',
    ...data,
    createdAt: new Date().toISOString()
  };
}

export function lookupTransactionStatus(transactionId: string): 'pending' | 'success' | 'failed' {
  const statuses: Array<'pending' | 'success' | 'failed'> = ['pending', 'success', 'failed'];
  const hash = transactionId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return statuses[hash % statuses.length];
}
