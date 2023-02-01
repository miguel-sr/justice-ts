import { ObjectId } from "mongodb";
import {
  IGetTipsParams,
  IGetTipsRepository,
} from "../../../controllers/tip/get-tips/protocols";
import { MongoClient } from "../../../database/mongo";
import { MongoType } from "../../mongo-protocols";
import { Tip } from "../../../models/tip";

export class MongoGetTipsRepository implements IGetTipsRepository {
  async getTips(
    id?: string,
    params?: IGetTipsParams
  ): Promise<Tip[] | Tip | { numberOfDocuments: number }> {
    if (params?.isCountingDocuments) {
      const numberOfDocuments = await MongoClient.db
        .collection("tips")
        .countDocuments();
      return { numberOfDocuments };
    }

    if (id) {
      const tip = await MongoClient.db
        .collection<MongoType<Tip>>("tips")
        .findOne({ _id: new ObjectId(id) });

      if (!tip) {
        throw new Error("Tip not found.");
      }

      return MongoClient.map(tip);
    } else {
      if (params?.skip) {
        return (
          await MongoClient.db
            .collection<MongoType<Tip>>("tips")
            .find({})
            .skip(params?.skip)
            .limit(6)
            .toArray()
        ).map(({ _id, ...rest }) => ({
          ...rest,
          id: _id.toHexString(),
        }));
      }

      return (
        await MongoClient.db
          .collection<MongoType<Tip>>("tips")
          .find({})
          .toArray()
      ).map(({ _id, ...rest }) => ({
        ...rest,
        id: _id.toHexString(),
      }));
    }
  }
}
