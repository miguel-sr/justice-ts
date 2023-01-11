import {
  ICreateUserParams,
  ICreateUserRepository,
} from "../../../controllers/user/create-user/protocols";
import { MongoClient } from "../../../database/mongo";
import { MongoType } from "../../mongo-protocols";
import { User } from "../../../models/user";

export class MongoCreateUserRepository implements ICreateUserRepository {
  async createUser(params: ICreateUserParams): Promise<User> {
    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(params);

    const user = await MongoClient.db
      .collection<MongoType<User>>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("User not created");
    }

    return MongoClient.map(user);
  }
}
