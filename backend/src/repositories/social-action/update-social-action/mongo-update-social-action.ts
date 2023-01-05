import {
  IUpdateSocialActionParams,
  IUpdateSocialActionRepository,
} from "../../../controllers/social-action/update-social-action/protocols";
import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { SocialAction } from "../../../models/social-action";
import { MongoSocialAction } from "../../mongo-protocols";

export class MongoUpdateSocialActionRepository
  implements IUpdateSocialActionRepository
{
  async updateSocialAction(
    id: string,
    params: IUpdateSocialActionParams
  ): Promise<SocialAction> {
    await MongoClient.db.collection("social-actions").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const socialAction = await MongoClient.db
      .collection<MongoSocialAction>("social-actions")
      .findOne({ _id: new ObjectId(id) });

    if (!socialAction) {
      throw new Error("Social action not updated");
    }

    return MongoClient.map(socialAction);
  }
}
