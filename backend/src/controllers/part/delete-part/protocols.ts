import { Part } from "../../../models/part";

export interface IDeletePartRepository {
  deletePart(id: string): Promise<Part>;
}
