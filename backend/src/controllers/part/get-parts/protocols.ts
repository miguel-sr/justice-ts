import { Part } from "../../../models/part";

export interface IGetPartsRepository {
  getParts(id?: string): Promise<Part[] | Part>;
}
