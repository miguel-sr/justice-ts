import { IDeleteTipRepository } from "../../../controllers/tip/delete-tip/protocols";
import { MongoClient } from "../../../database/mongo";
import { MongoTip } from "../../mongo-protocols";
import { Tip } from "../../../models/tip";
import { ObjectId } from "mongodb";

export class MongoDeleteTipRepository implements IDeleteTipRepository {
  async deleteTip(id: string): Promise<Tip> {
    const tip = await MongoClient.db
      .collection<MongoTip>("tips")
      .findOne({ _id: new ObjectId(id) });

    if (!tip) {
      throw new Error("Tip not found.");
    }

    const { deletedCount } = await MongoClient.db
      .collection("members")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Tip not deleted.");
    }

    return MongoClient.map(tip);
  }
}
