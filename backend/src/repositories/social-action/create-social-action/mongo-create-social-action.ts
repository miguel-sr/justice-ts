import {
  ICreateSocialActionParams,
  ICreateSocialActionRepository,
} from "../../../controllers/social-action/create-social-action/protocols";
import { MongoClient } from "../../../database/mongo";
import { SocialAction } from "../../../models/social-action";
import { MongoType } from "../../mongo-protocols";

export class MongoCreateSocialActionRepository
  implements ICreateSocialActionRepository
{
  async createSocialAction(
    params: ICreateSocialActionParams
  ): Promise<SocialAction> {
    const { insertedId } = await MongoClient.db
      .collection("social-actions")
      .insertOne(params);

    const category = await MongoClient.db
      .collection<MongoType<SocialAction>>("social-actions")
      .findOne({ _id: insertedId });

    if (!category) {
      throw new Error("Social Action not created");
    }

    return MongoClient.map(category);
  }
}
