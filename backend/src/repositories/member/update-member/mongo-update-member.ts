import {
  IUpdateMemberParams,
  IUpdateMemberRepository,
} from "../../../controllers/member/update-member/protocols";
import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { MongoMember } from "../../mongo-protocols";
import { Member } from "../../../models/member";

export class MongoUpdateMemberRepository implements IUpdateMemberRepository {
  async updateMember(id: string, params: IUpdateMemberParams): Promise<Member> {
    await MongoClient.db.collection("members").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const member = await MongoClient.db
      .collection<MongoMember>("members")
      .findOne({ _id: new ObjectId(id) });

    if (!member) {
      throw new Error("Member not updated");
    }

    return MongoClient.map(member);
  }
}
