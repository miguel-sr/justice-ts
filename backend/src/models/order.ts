export interface Order {
  id: string;
  name: string;
  teamName: string;
  teamNumber: string;
  email: string;
  reason: string;
  cart: Array<{ id: number; amount: number }>;
  createdAt: Date;
}
