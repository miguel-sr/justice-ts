import { ObjectId } from "mongodb";
import { IGetTipsRepository } from "../../../controllers/tip/get-tips/protocols";
import { MongoClient } from "../../../database/mongo";
import { MongoType } from "../../mongo-protocols";
import { Tip } from "../../../models/tip";

export class MongoGetTipsRepository implements IGetTipsRepository {
  async getTips(id?: string): Promise<Tip[] | Tip> {
    if (id) {
      const tip = await MongoClient.db
        .collection<MongoType<Tip>>("tips")
        .findOne({ _id: new ObjectId(id) });

      if (!tip) {
        throw new Error("Tip not found.");
      }

      return MongoClient.map(tip);
    } else {
      const tips = await MongoClient.db
        .collection<MongoType<Tip>>("tips")
        .find({})
        .toArray();

      return MongoClient.mapArray(tips);
    }
  }
}
