import { IGetPartsPaginationRepository } from "../../../controllers/part/get-parts/protocols";
import { MongoClient } from "../../../database/mongo";
import { MongoType } from "../../mongo-protocols";
import { Part } from "../../../models/part";

export class MongoGetPartsPaginationRepository
  implements IGetPartsPaginationRepository
{
  async getParts(
    itemsPerPage?: string,
    skip = "0"
  ): Promise<Part[] | { numberOfDocuments: number }> {
    if (!itemsPerPage) {
      const numberOfDocuments = await MongoClient.db
        .collection("parts")
        .countDocuments();
      return { numberOfDocuments };
    } else {
      const parts = await MongoClient.db
        .collection<MongoType<Part>>("parts")
        .find({})
        .skip(parseInt(skip))
        .limit(parseInt(itemsPerPage))
        .toArray();

      return MongoClient.mapArray(parts);
    }
  }
}
