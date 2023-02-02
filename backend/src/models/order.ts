export interface Order {
  id: string;
  name: string;
  teamName: string;
  teamNumber: string;
  email: string;
  reason: string;
  cart: Array<{
    id: string;
    description: string;
    amount: number;
    image: string;
  }>;
  createdAt: Date;
}
