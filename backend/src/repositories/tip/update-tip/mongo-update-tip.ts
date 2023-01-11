import {
  IUpdateTipParams,
  IUpdateTipRepository,
} from "../../../controllers/tip/update-tip/protocols";
import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { MongoType } from "../../mongo-protocols";
import { Tip } from "../../../models/tip";

export class MongoUpdateTipRepository implements IUpdateTipRepository {
  async updateTip(id: string, params: IUpdateTipParams): Promise<Tip> {
    await MongoClient.db.collection("tips").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const tip = await MongoClient.db
      .collection<MongoType<Tip>>("tips")
      .findOne({ _id: new ObjectId(id) });

    if (!tip) {
      throw new Error("Tip not updated");
    }

    return MongoClient.map(tip);
  }
}
