import { ObjectId } from "mongodb";
import {
  IUpdateSponsorParams,
  IUpdateSponsorRepository,
} from "../../../controllers/sponsor/update-sponsor/protocols";
import { MongoClient } from "../../../database/mongo";
import { Sponsor } from "../../../models/sponsor";
import { MongoSponsor } from "../../mongo-protocols";

export class MongoUpdateSponsorRepository implements IUpdateSponsorRepository {
  async updateSponsor(
    id: string,
    params: IUpdateSponsorParams
  ): Promise<Sponsor> {
    await MongoClient.db.collection("sponsors").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const sponsor = await MongoClient.db
      .collection<MongoSponsor>("sponsors")
      .findOne({ _id: new ObjectId(id) });

    if (!sponsor) {
      throw new Error("Sponsor not updated.");
    }

    return MongoClient.map(sponsor);
  }
}
