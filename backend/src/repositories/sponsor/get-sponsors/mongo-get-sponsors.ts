import { ObjectId } from "mongodb";
import { IGetSponsorsRepository } from "../../../controllers/sponsor/get-sponsors/protocols";
import { MongoClient } from "../../../database/mongo";
import { Sponsor } from "../../../models/sponsor";
import { MongoSponsor } from "../../mongo-protocols";

export class MongoGetSponsorsRepository implements IGetSponsorsRepository {
  async getSponsors(id?: string): Promise<Sponsor[] | Sponsor> {
    if (id) {
      const sponsor = await MongoClient.db
        .collection<MongoSponsor>("sponsors")
        .findOne({ _id: new ObjectId(id) });

      if (!sponsor) {
        throw new Error("Sponsor not found.");
      }

      return MongoClient.map(sponsor);
    } else {
      const sponsors = await MongoClient.db
        .collection<MongoSponsor>("sponsors")
        .find({})
        .toArray();

      return MongoClient.mapArray(sponsors);
    }
  }
}
