import { Order } from "../../../models/order";

export interface ICreateOrderParams {
  name: string;
  teamName: string;
  teamNumber: string;
  email: string;
  reason: string;
  cart: Array<{ id: number; amount: number }>;
  createdAt: Date;
}

export interface ICreateOrderRepository {
  createOrder(params: ICreateOrderParams): Promise<Order>;
}
