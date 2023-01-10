import { Order } from "../../../models/order";

export interface IGetOrdersRepository {
  getOrders(): Promise<Order[]>;
}
