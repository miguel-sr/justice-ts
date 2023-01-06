import { ObjectId } from "mongodb";
import { IGetVideosRepository } from "../../../controllers/video/get-videos/protocols";
import { MongoClient } from "../../../database/mongo";
import { Video } from "../../../models/video";
import { MongoVideo } from "../../mongo-protocols";

export class MongoGetVideosRepository implements IGetVideosRepository {
  async getVideos(id?: string): Promise<Video[] | Video> {
    if (id) {
      const video = await MongoClient.db
        .collection<MongoVideo>("videos")
        .findOne({ _id: new ObjectId(id) });

      if (!video) {
        throw new Error("Video not found.");
      }

      return MongoClient.map(video);
    } else {
      const videos = await MongoClient.db
        .collection<MongoVideo>("videos")
        .find({})
        .toArray();

      return MongoClient.mapArray(videos);
    }
  }
}
