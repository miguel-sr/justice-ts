import { ObjectId } from "mongodb";
import { IDeleteVideoRepository } from "../../../controllers/video/delete-video/protocols";
import { MongoClient } from "../../../database/mongo";
import { Video } from "../../../models/video";
import { MongoVideo } from "../../mongo-protocols";

export class MongoDeleteVideoRepository implements IDeleteVideoRepository {
  async deleteVideo(id: string): Promise<Video> {
    const video = await MongoClient.db
      .collection<MongoVideo>("videos")
      .findOne({ _id: new ObjectId(id) });

    if (!video) {
      throw new Error("Video not found.");
    }

    const { deletedCount } = await MongoClient.db
      .collection("videos")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Video not deleted.");
    }

    return MongoClient.map(video);
  }
}
