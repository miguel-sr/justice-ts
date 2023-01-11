import {
  IUpdateCategoryParams,
  IUpdateCategoryRepository,
} from "../../../controllers/category/update-category/protocols";
import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { MongoType } from "../../mongo-protocols";
import { Category } from "../../../models/category";

export class MongoUpdateCategoryRepository
  implements IUpdateCategoryRepository
{
  async updateCategory(
    id: string,
    params: IUpdateCategoryParams
  ): Promise<Category> {
    await MongoClient.db.collection("categories").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const category = await MongoClient.db
      .collection<MongoType<Category>>("categories")
      .findOne({ _id: new ObjectId(id) });

    if (!category) {
      throw new Error("Category not updated");
    }

    return MongoClient.map(category);
  }
}
