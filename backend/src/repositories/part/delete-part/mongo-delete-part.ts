import { ObjectId } from "mongodb";
import { IDeletePartRepository } from "../../../controllers/part/delete-part/protocols";
import { MongoClient } from "../../../database/mongo";
import { Part } from "../../../models/part";
import { MongoPart } from "../../mongo-protocols";

export class MongoDeletePartRepository implements IDeletePartRepository {
  async deletePart(id: string): Promise<Part> {
    const part = await MongoClient.db
      .collection<MongoPart>("parts")
      .findOne({ _id: new ObjectId(id) });

    if (!part) {
      throw new Error("Part not found.");
    }

    const { deletedCount } = await MongoClient.db
      .collection("parts")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Part not deleted.");
    }

    return MongoClient.map(part);
  }
}
