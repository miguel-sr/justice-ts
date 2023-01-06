import {
  ICreateTipParams,
  ICreateTipRepository,
} from "../../../controllers/tip/create-tip/protocols";
import { MongoClient } from "../../../database/mongo";
import { MongoTip } from "../../mongo-protocols";
import { Tip } from "../../../models/tip";

export class MongoCreateTipRepository implements ICreateTipRepository {
  async createTip(params: ICreateTipParams): Promise<Tip> {
    const { insertedId } = await MongoClient.db
      .collection("tips")
      .insertOne(params);

    const tip = await MongoClient.db
      .collection<MongoTip>("tips")
      .findOne({ _id: insertedId });

    if (!tip) {
      throw new Error("Tip not created");
    }

    return MongoClient.map(tip);
  }
}
