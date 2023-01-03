import { Category } from "../../../models/category";

export interface ICreateCategoryParams {
  name: string;
}

export interface ICreateCategoryRepository {
  createCategory(params: ICreateCategoryParams): Promise<Category>;
}
