import { Category } from "../../../models/category";

export interface ICreateCategoryParams {
  name: string;
  createdAt: Date;
}

export interface ICreateCategoryRepository {
  createCategory(params: ICreateCategoryParams): Promise<Category>;
}
