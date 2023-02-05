import { IGetVideosPaginationRepository } from "../../../controllers/video/get-videos/protocols";
import { MongoClient } from "../../../database/mongo";
import { MongoType } from "../../mongo-protocols";
import { Video } from "../../../models/video";

export class MongoGetVideosPaginationRepository
  implements IGetVideosPaginationRepository
{
  async getVideos(
    itemsPerPage?: string,
    skip = "0"
  ): Promise<Video[] | { numberOfDocuments: number }> {
    if (!itemsPerPage) {
      const numberOfDocuments = await MongoClient.db
        .collection("videos")
        .countDocuments();
      return { numberOfDocuments };
    } else {
      const socialActions = await MongoClient.db
        .collection<MongoType<Video>>("videos")
        .find({})
        .skip(parseInt(skip))
        .limit(parseInt(itemsPerPage))
        .toArray();

      return MongoClient.mapArray(socialActions);
    }
  }
}
