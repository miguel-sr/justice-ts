import { IGetTipsRepository } from "../../../controllers/tip/get-tips/protocols";
import { MongoClient } from "../../../database/mongo";
import { MongoTip } from "../../mongo-protocols";
import { Tip } from "../../../models/tip";
import { ObjectId } from "mongodb";

export class MongoGetTipsRepository implements IGetTipsRepository {
  async getTips(id?: string): Promise<Tip[] | Tip> {
    if (id) {
      const tip = await MongoClient.db
        .collection<MongoTip>("tips")
        .findOne({ _id: new ObjectId(id) });

      if (!tip) {
        throw new Error("Tip not found.");
      }

      return MongoClient.map(tip);
    } else {
      const tips = await MongoClient.db
        .collection<MongoTip>("tips")
        .find({})
        .toArray();

      return MongoClient.mapArray(tips);
    }
  }
}
