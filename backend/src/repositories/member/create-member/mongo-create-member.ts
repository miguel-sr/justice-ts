import {
  ICreateMemberParams,
  ICreateMemberRepository,
} from "../../../controllers/member/create-member/protocols";
import { MongoClient } from "../../../database/mongo";
import { Member } from "../../../models/member";
import { MongoMember } from "../../mongo-protocols";

export class MongoCreateMemberRepository
  implements ICreateMemberRepository
{
  async createMember(params: ICreateMemberParams): Promise<Member> {
    const { insertedId } = await MongoClient.db
      .collection("members")
      .insertOne(params);

    const member = await MongoClient.db
      .collection<MongoMember>("members")
      .findOne({ _id: insertedId });

    if (!member) {
      throw new Error("Member not created");
    }

    return MongoClient.map(member);
  }
}
