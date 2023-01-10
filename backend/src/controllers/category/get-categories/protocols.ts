import { Category } from "../../../models/category";

export interface IGetCategoriesRepository {
  getCategories(slug?: string): Promise<Category[] | Category>;
}
