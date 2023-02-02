import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { Part } from "../../../models/part";
import { MongoType } from "../../mongo-protocols";
import {
  IUpdateInventoryParams,
  IUpdateInventoryRepository,
} from "../../../controllers/part/update-inventory/protocols";

export class MongoUpdateInventoryRepository implements IUpdateInventoryRepository {
  async updateInventory(operation: string, params: IUpdateInventoryParams[]) {
    params.forEach(async (item) => {
      const part = await MongoClient.db
        .collection<MongoType<Part>>("parts")
        .findOne({ _id: new ObjectId(item.id) });

      if (!part) {
        throw new Error("Part not found.");
      }

      switch (operation) {
        case "add":
          await MongoClient.db.collection("parts").updateOne(
            { _id: new ObjectId(item.id) },
            {
              $set: {
                inventory: part.inventory + item.amount,
              },
            }
          );
          break;

        case "remove":
          await MongoClient.db.collection("parts").updateOne(
            { _id: new ObjectId(item.id) },
            {
              $set: {
                inventory: part.inventory - item.amount,
              },
            }
          );
          break;
      }
    });
  }
}
