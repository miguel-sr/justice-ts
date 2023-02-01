import { IGetTipsPaginationRepository } from "../../../controllers/tip/get-tips/protocols";
import { MongoClient } from "../../../database/mongo";
import { MongoType } from "../../mongo-protocols";
import { Tip } from "../../../models/tip";

export class MongoGetTipsPaginationRepository
  implements IGetTipsPaginationRepository
{
  async getTips(
    itemsPerPage?: string,
    skip = "0"
  ): Promise<Tip[] | { numberOfDocuments: number }> {
    if (!itemsPerPage) {
      const numberOfDocuments = await MongoClient.db
        .collection("tips")
        .countDocuments();
      return { numberOfDocuments };
    } else {
      const tips = await MongoClient.db
        .collection<MongoType<Tip>>("tips")
        .find({})
        .skip(parseInt(skip))
        .limit(parseInt(itemsPerPage))
        .toArray();

      return MongoClient.mapArray(tips);
    }
  }
}
