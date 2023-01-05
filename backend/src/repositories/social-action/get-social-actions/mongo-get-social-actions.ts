import { ObjectId } from "mongodb";
import { IGetSocialActionsRepository } from "../../../controllers/social-action/get-social-actions/protocols";
import { MongoClient } from "../../../database/mongo";
import { SocialAction } from "../../../models/social-action";
import { MongoSocialAction } from "../../mongo-protocols";

export class MongoGetSocialActionsRepository
  implements IGetSocialActionsRepository
{
  async getSocialActions(id?: string): Promise<SocialAction[] | SocialAction> {
    if (id) {
      const socialAction = await MongoClient.db
        .collection<MongoSocialAction>("social-actions")
        .findOne({ _id: new ObjectId(id) });

      if (!socialAction) {
        throw new Error("Social action not found.");
      }

      return MongoClient.map(socialAction);
    } else {
      const socialActions = await MongoClient.db
        .collection<MongoSocialAction>("social-actions")
        .find({})
        .toArray();

      return MongoClient.mapArray(socialActions);
    }
  }
}
