export type Category = "game" | "voucher";

export type Denomination = {
  name: string;
  price: number;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  category: Category;
  denominations: Denomination[];
};

export type PaymentMethod = "QRIS" | "DANA" | "OVO" | "GoPay" | "Bank Transfer";

export type TransactionInput = {
  productName: string;
  userId: string;
  zoneId?: string;
  denomination: Denomination;
  paymentMethod: PaymentMethod;
};

export type TransactionStatus = "pending" | "success" | "failed";

export type TransactionResult = {
  id: string;
  status: Exclude<TransactionStatus, "failed">;
  createdAt: string;
  totalPrice: number;
  productName: string;
};
