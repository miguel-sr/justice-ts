import { Category } from "../../../models/category";

export interface IGetCategoriesRepository {
  getCategories(id?: string): Promise<Category[] | Category>;
}
