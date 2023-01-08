import { Part } from "../../../models/part";

export interface ICreatePartParams {
  name: string;
  category: string;
  description: string;
  inventory: number;
  limitPerOrder: number;
  image: string;
}

export interface ICreatePartRepository {
  createPart(params: ICreatePartParams): Promise<Part>;
}
