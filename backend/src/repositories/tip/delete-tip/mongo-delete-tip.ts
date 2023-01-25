import { ObjectId } from "mongodb";
import { IDeleteTipRepository } from "../../../controllers/tip/delete-tip/protocols";
import { MongoClient } from "../../../database/mongo";
import { MongoType } from "../../mongo-protocols";
import { Tip } from "../../../models/tip";

export class MongoDeleteTipRepository implements IDeleteTipRepository {
  async deleteTip(id: string): Promise<Tip> {
    const tip = await MongoClient.db
      .collection<MongoType<Tip>>("tips")
      .findOne({ _id: new ObjectId(id) });

    if (!tip) {
      throw new Error("Tip not found.");
    }

    const { deletedCount } = await MongoClient.db
      .collection("tips")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Tip not deleted.");
    }

    return MongoClient.map(tip);
  }
}
