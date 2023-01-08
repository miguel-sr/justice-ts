import { Part } from "../../../models/part";

export interface IUpdatePartParams {
  name?: string;
  category?: string;
  description?: string;
  inventory?: number;
  limitPerOrder?: number;
  image?: string;
}

export interface IUpdatePartRepository {
  updatePart(id: string, params: IUpdatePartParams): Promise<Part>;
}
