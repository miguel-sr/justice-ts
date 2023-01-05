import { ObjectId } from "mongodb";
import { IDeleteMemberRepository } from "../../../controllers/member/delete-member/protocols";
import { MongoClient } from "../../../database/mongo";
import { Member } from "../../../models/member";
import { MongoMember } from "../../mongo-protocols";

export class MongoDeleteSocialActionRepository
  implements IDeleteMemberRepository
{
  async deleteMember(id: string): Promise<Member> {
    const member = await MongoClient.db
      .collection<MongoMember>("members")
      .findOne({ _id: new ObjectId(id) });

    if (!member) {
      throw new Error("Member not found.");
    }

    const { deletedCount } = await MongoClient.db
      .collection("members")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Member not deleted.");
    }

    return MongoClient.map(member);
  }
}
