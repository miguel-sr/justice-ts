import { ObjectId } from "mongodb";
import {
  IUpdatePartParams,
  IUpdatePartRepository,
} from "../../../controllers/part/update-part/protocols";
import { MongoClient } from "../../../database/mongo";
import { Part } from "../../../models/part";
import { MongoType } from "../../mongo-protocols";

export class MongoUpdatePartRepository implements IUpdatePartRepository {
  async updatePart(id: string, params: IUpdatePartParams): Promise<Part> {
    await MongoClient.db.collection("parts").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const part = MongoClient.db
      .collection<MongoType<Part>>("parts")
      .findOne({ _id: new ObjectId(id) });

    if (!part) {
      throw new Error("Part not updated.");
    }

    return MongoClient.map(part);
  }
}
