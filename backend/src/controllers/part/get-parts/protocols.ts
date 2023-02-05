import { Part } from "../../../models/part";

export interface IGetPartsRepository {
  getParts(id?: string): Promise<Part[] | Part>;
}

export interface IGetPartsPaginationRepository {
  getParts(
    itemsPerPage?: string,
    skip?: string
  ): Promise<Part[] | { numberOfDocuments: number }>;
}