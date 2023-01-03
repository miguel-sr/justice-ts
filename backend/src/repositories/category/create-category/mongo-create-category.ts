import {
  ICreateCategoryParams,
  ICreateCategoryRepository,
} from "../../../controllers/category/create-category/protocols";
import { MongoClient } from "../../../database/mongo";
import { Category } from "../../../models/category";
import { MongoCategory } from "../../mongo-protocols";

export class MongoCreateCategoryRepository
  implements ICreateCategoryRepository
{
  async createCategory(params: ICreateCategoryParams): Promise<Category> {
    const { insertedId } = await MongoClient.db
      .collection("categories")
      .insertOne(params);

    const category = await MongoClient.db
      .collection<MongoCategory>("categories")
      .findOne({ _id: insertedId });

    if (!category) {
      throw new Error("Category not created");
    }

    return MongoClient.map(category);
  }
}
