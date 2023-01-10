import { Order } from "../../../models/order";

export interface IDeleteOrderRepository {
  deleteOrder(id: string): Promise<Order>;
}
