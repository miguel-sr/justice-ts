import {
  ICreateVideoParams,
  ICreateVideoRepository,
} from "../../../controllers/video/create-video/protocols";
import { MongoClient } from "../../../database/mongo";
import { MongoVideo } from "../../mongo-protocols";
import { Video } from "../../../models/video";

export class MongoCreateVideoRepository implements ICreateVideoRepository {
  async createVideo(params: ICreateVideoParams): Promise<Video> {
    const { insertedId } = await MongoClient.db
      .collection("videos")
      .insertOne(params);

    const video = await MongoClient.db
      .collection<MongoVideo>("videos")
      .findOne({ _id: insertedId });

    if (!video) {
      throw new Error("Video not created");
    }

    return MongoClient.map(video);
  }
}
