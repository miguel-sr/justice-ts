import { ObjectId } from "mongodb";
import { IDeleteSocialActionRepository } from "../../../controllers/social-action/delete-social-action/protocols";
import { MongoClient } from "../../../database/mongo";
import { SocialAction } from "../../../models/social-action";
import { MongoType } from "../../mongo-protocols";

export class MongoDeleteSocialActionRepository
  implements IDeleteSocialActionRepository
{
  async deleteSocialAction(id: string): Promise<SocialAction> {
    const socialAction = await MongoClient.db
      .collection<MongoType<SocialAction>>("social-actions")
      .findOne({ _id: new ObjectId(id) });

    if (!socialAction) {
      throw new Error("Social action not found.");
    }

    const { deletedCount } = await MongoClient.db
      .collection("social-actions")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Social action not deleted.");
    }

    return MongoClient.map(socialAction);
  }
}
