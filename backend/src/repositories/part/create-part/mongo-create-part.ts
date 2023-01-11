import {
  ICreatePartParams,
  ICreatePartRepository,
} from "../../../controllers/part/create-part/protocols";
import { MongoClient } from "../../../database/mongo";
import { Part } from "../../../models/part";
import { MongoType } from "../../mongo-protocols";

export class MongoCreatePartRepository implements ICreatePartRepository {
  async createPart(params: ICreatePartParams): Promise<Part> {
    const { insertedId } = await MongoClient.db
      .collection("parts")
      .insertOne(params);

    const part = await MongoClient.db
      .collection<MongoType<Part>>("parts")
      .findOne({ _id: insertedId });

    if (!part) {
      throw new Error("Part not created.");
    }

    return MongoClient.map(part);
  }
}
