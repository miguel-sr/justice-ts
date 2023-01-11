import { IGetOrdersRepository } from "../../../controllers/order/get-orders/protocols";
import { MongoClient } from "../../../database/mongo";
import { Order } from "../../../models/order";
import { MongoType } from "../../mongo-protocols";

export class MongoGetOrdersRepository implements IGetOrdersRepository {
  async getOrders(): Promise<Order[]> {
    const orders = await MongoClient.db
      .collection<MongoType<Order>>("orders")
      .find({})
      .toArray();

    return MongoClient.mapArray(orders);
  }
}
