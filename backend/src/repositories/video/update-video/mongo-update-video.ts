import {
  IUpdateVideoParams,
  IUpdateVideoRepository,
} from "../../../controllers/video/update-video/protocols";
import { Video } from "../../../models/video";
import { MongoClient } from "../../../database/mongo";
import { MongoVideo } from "../../mongo-protocols";
import { ObjectId } from "mongodb";

export class MongoUpdateVideoRepository implements IUpdateVideoRepository {
  async updateVideo(id: string, params: IUpdateVideoParams): Promise<Video> {
    await MongoClient.db.collection("videos").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const video = await MongoClient.db
      .collection<MongoVideo>("videos")
      .findOne({ _id: new ObjectId(id) });

    if (!video) {
      throw new Error("Video not updated.");
    }

    return MongoClient.map(video);
  }
}
