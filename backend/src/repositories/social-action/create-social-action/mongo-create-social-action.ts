import {
  ICreateSocialActionParams,
  ICreateSocialActionRepository,
} from "../../../controllers/social-action/create-social-action/protocols";
import { MongoClient } from "../../../database/mongo";
import { SocialAction } from "../../../models/social-action";
import { MongoSocialAction } from "../../mongo-protocols";

export class MongoCreateEventRepository
  implements ICreateSocialActionRepository
{
  async createSocialAction(
    params: ICreateSocialActionParams
  ): Promise<SocialAction> {
    const { insertedId } = await MongoClient.db
      .collection("social-actions")
      .insertOne(params);

    const category = await MongoClient.db
      .collection<MongoSocialAction>("social-actions")
      .findOne({ _id: insertedId });

    if (!category) {
      throw new Error("Social Action not created");
    }

    return MongoClient.map(category);
  }
}
