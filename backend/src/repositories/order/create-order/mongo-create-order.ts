import {
  ICreateOrderParams,
  ICreateOrderRepository,
} from "../../../controllers/order/create-order/protocols";
import { MongoClient } from "../../../database/mongo";
import { Order } from "../../../models/order";
import { MongoOrder } from "../../mongo-protocols";

export class MongoCreateOrderRepository implements ICreateOrderRepository {
  async createOrder(params: ICreateOrderParams): Promise<Order> {
    const { insertedId } = await MongoClient.db
      .collection("orders")
      .insertOne(params);

    const order = await MongoClient.db
      .collection<MongoOrder>("orders")
      .findOne({ _id: insertedId });

    if (!order) {
      throw new Error("Order not created.");
    }

    return MongoClient.map(order);
  }
}
