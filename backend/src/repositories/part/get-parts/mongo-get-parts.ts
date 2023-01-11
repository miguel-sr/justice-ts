import { ObjectId } from "mongodb";
import { IGetPartsRepository } from "../../../controllers/part/get-parts/protocols";
import { MongoClient } from "../../../database/mongo";
import { Part } from "../../../models/part";
import { MongoType } from "../../mongo-protocols";

export class MongoGetPartsRepository implements IGetPartsRepository {
  async getParts(id?: string): Promise<Part[] | Part> {
    if (id) {
      const part = await MongoClient.db
        .collection<MongoType<Part>>("parts")
        .findOne({ _id: new ObjectId(id) });

      if (!part) {
        throw new Error("Part not found.");
      }

      return MongoClient.map(part);
    } else {
      const parts = await MongoClient.db
        .collection<MongoType<Part>>("parts")
        .find({})
        .toArray();

      return MongoClient.mapArray(parts);
    }
  }
}
