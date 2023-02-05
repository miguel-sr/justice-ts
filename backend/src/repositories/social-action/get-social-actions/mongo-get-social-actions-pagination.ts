import { IGetSocialActionsPaginationRepository } from "../../../controllers/social-action/get-social-actions/protocols";
import { MongoClient } from "../../../database/mongo";
import { MongoType } from "../../mongo-protocols";
import { SocialAction } from "../../../models/social-action";

export class MongoGetSocialActionsPaginationRepository
  implements IGetSocialActionsPaginationRepository
{
  async getSocialActions(
    itemsPerPage?: string,
    skip = "0"
  ): Promise<SocialAction[] | { numberOfDocuments: number }> {
    if (!itemsPerPage) {
      const numberOfDocuments = await MongoClient.db
        .collection("tips")
        .countDocuments();
      return { numberOfDocuments };
    } else {
      const socialActions = await MongoClient.db
        .collection<MongoType<SocialAction>>("tips")
        .find({})
        .skip(parseInt(skip))
        .limit(parseInt(itemsPerPage))
        .toArray();

      return MongoClient.mapArray(socialActions);
    }
  }
}
