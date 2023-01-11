import { ObjectId } from "mongodb";
import { IGetMembersRepository } from "../../../controllers/member/get-members/protocols";
import { MongoClient } from "../../../database/mongo";
import { Member } from "../../../models/member";
import { MongoType } from "../../mongo-protocols";

export class MongoGetMembersRepository implements IGetMembersRepository {
  async getMembers(id?: string): Promise<Member[] | Member> {
    if (id) {
      const member = await MongoClient.db
        .collection<MongoType<Member>>("members")
        .findOne({ _id: new ObjectId(id) });

      if (!member) {
        throw new Error("Social action not found.");
      }

      return MongoClient.map(member);
    } else {
      const members = await MongoClient.db
        .collection<MongoType<Member>>("members")
        .find({})
        .toArray();

      return MongoClient.mapArray(members);
    }
  }
}
