import {
  IUpdateUserParams,
  IUpdateUserRepository,
} from "../../../controllers/user/update-user/protocols";
import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { MongoType } from "../../mongo-protocols";
import { User } from "../../../models/user";

export class MongoUpdateUserRepository implements IUpdateUserRepository {
  async updateUser(id: string, params: IUpdateUserParams): Promise<User> {
    await MongoClient.db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const user = await MongoClient.db
      .collection<MongoType<User>>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("User not updated");
    }

    return MongoClient.map(user);
  }
}
