import {
  ICreateSponsorParams,
  ICreateSponsorRepository,
} from "../../../controllers/sponsor/create-sponsor/protocols";
import { MongoClient } from "../../../database/mongo";
import { Sponsor } from "../../../models/sponsor";
import { MongoType } from "../../mongo-protocols";

export class MongoCreateSponsorRepository implements ICreateSponsorRepository {
  async createSponsor(params: ICreateSponsorParams): Promise<Sponsor> {
    const { insertedId } = await MongoClient.db
      .collection("sponsors")
      .insertOne(params);

    const sponsor = await MongoClient.db
      .collection<MongoType<Sponsor>>("sponsors")
      .findOne({ _id: insertedId });

    if (!sponsor) {
      throw new Error("Sponsor not created.");
    }

    return MongoClient.map(sponsor);
  }
}
