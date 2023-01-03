import { Category } from "../../../models/category";

export interface IDeleteCategoryRepository {
  deleteCategory(id: string): Promise<Category>;
}
