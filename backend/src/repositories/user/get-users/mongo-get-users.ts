import { ObjectId } from "mongodb";
import { IGetUsersRepository } from "../../../controllers/user/get-users/protocols";
import { MongoClient } from "../../../database/mongo";
import { User } from "../../../models/user";
import { MongoType } from "../../mongo-protocols";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(id?: string): Promise<User[] | User> {
    if (id) {
      const user = await MongoClient.db
        .collection<MongoType<User>>("users")
        .findOne({ _id: new ObjectId(id) });

      if (!user) {
        throw new Error("User not found.");
      }

      return MongoClient.map(user);
    } else {
      const users = await MongoClient.db
        .collection<MongoType<User>>("users")
        .find({})
        .toArray();

      return MongoClient.mapArray(users);
    }
  }
}
