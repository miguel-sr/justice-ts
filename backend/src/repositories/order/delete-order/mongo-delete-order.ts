import { ObjectId } from "mongodb";
import { IDeleteOrderRepository } from "../../../controllers/order/delete-order/protocols";
import { MongoClient } from "../../../database/mongo";
import { Order } from "../../../models/order";
import { MongoType } from "../../mongo-protocols";

export class MongoDeleteOrderRepository implements IDeleteOrderRepository {
  async deleteOrder(id: string): Promise<Order> {
    const order = await MongoClient.db
      .collection<MongoType<Order>>("orders")
      .findOne({ _id: new ObjectId(id) });

    if (!order) {
      throw new Error("Order not found.");
    }

    const { deletedCount } = await MongoClient.db
      .collection("orders")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Order not deleted.");
    }

    return MongoClient.map(order);
  }
}
