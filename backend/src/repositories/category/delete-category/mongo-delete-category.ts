import { ObjectId } from "mongodb";
import { IDeleteCategoryRepository } from "../../../controllers/category/delete-category/protocols";
import { MongoClient } from "../../../database/mongo";
import { Category } from "../../../models/category";
import { MongoCategory } from "../../mongo-protocols";

export class MongoDeleteCategoryRepository
  implements IDeleteCategoryRepository
{
  async deleteCategory(id: string): Promise<Category> {
    const category = await MongoClient.db
      .collection<MongoCategory>("categories")
      .findOne({ _id: new ObjectId(id) });

    if (!category) {
      throw new Error("Category not found.");
    }

    const { deletedCount } = await MongoClient.db
      .collection("categories")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Category not deleted.");
    }

    return MongoClient.map(category);
  }
}
