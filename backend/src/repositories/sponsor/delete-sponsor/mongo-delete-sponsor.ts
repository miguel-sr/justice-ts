import { ObjectId } from "mongodb";
import { IDeleteSponsorRepository } from "../../../controllers/sponsor/delete-sponsor/protocols";
import { MongoClient } from "../../../database/mongo";
import { Sponsor } from "../../../models/sponsor";
import { MongoSponsor } from "../../mongo-protocols";

export class MongoDeleteSponsorRepository implements IDeleteSponsorRepository {
  async deleteSponsor(id: string): Promise<Sponsor> {
    const sponsor = await MongoClient.db
      .collection<MongoSponsor>("sponsors")
      .findOne({ _id: new ObjectId(id) });

    if (!sponsor) {
      throw new Error("Sponsor not found.");
    }

    const { deletedCount } = await MongoClient.db
      .collection("sponsors")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Sponsor not deleted.");
    }

    return MongoClient.map(sponsor);
  }
}
