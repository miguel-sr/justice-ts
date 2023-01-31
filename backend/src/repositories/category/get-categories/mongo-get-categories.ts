import { ObjectId } from "mongodb";
import { IGetCategoriesRepository } from "../../../controllers/category/get-categories/protocols";
import { MongoClient } from "../../../database/mongo";
import { Category } from "../../../models/category";
import { MongoType } from "../../mongo-protocols";

export class MongoGetCategoriesRepository implements IGetCategoriesRepository {
  async getCategories(slug?: string): Promise<Category[] | Category> {
    if (slug) {
      let category = null;
      try {
        const _id = new ObjectId(slug);
        category = await MongoClient.db
          .collection<MongoType<Category>>("categories")
          .findOne({ _id });
      } catch (error) {
        category = await MongoClient.db
          .collection<MongoType<Category>>("categories")
          .findOne({ slug });
      }

      if (!category) {
        throw new Error("Category not found.");
      }

      return MongoClient.map(category);
    } else {
      const categories = await MongoClient.db
        .collection<MongoType<Category>>("categories")
        .find({})
        .toArray();

      return MongoClient.mapArray(categories);
    }
  }
}
