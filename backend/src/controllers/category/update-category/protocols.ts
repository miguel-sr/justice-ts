import { Category } from "../../../models/category";

export interface IUpdateCategoryParams {
  name?: string;
}

export interface IUpdateCategoryRepository {
  updateCategory(id: string, params: IUpdateCategoryParams): Promise<Category>;
}
