import { ObjectId } from "mongodb";
import { IGetCategoriesRepository } from "../../../controllers/category/get-categories/protocols";
import { MongoClient } from "../../../database/mongo";
import { Category } from "../../../models/category";
import { MongoCategory } from "../../mongo-protocols";

export class MongoGetCategoriesRepository implements IGetCategoriesRepository {
  async getCategories(id?: string): Promise<Category[] | Category> {
    if (id) {
      const category = await MongoClient.db
        .collection<MongoCategory>("categories")
        .findOne({ _id: new ObjectId(id) });

      if (!category) {
        throw new Error("Category not found.");
      }

      return MongoClient.map(category);
    } else {
      const categories = await MongoClient.db
        .collection<MongoCategory>("categories")
        .find({})
        .toArray();

      return MongoClient.mapArray(categories);
    }
  }
}
