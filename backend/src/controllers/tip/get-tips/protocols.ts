import { Tip } from "../../../models/tip";

export interface IGetTipsRepository {
  getTips(id?: string): Promise<Tip[] | Tip>;
}

export interface IGetTipsPaginationRepository {
  getTips(
    itemsPerPage?: string,
    skip?: string
  ): Promise<Tip[] | { numberOfDocuments: number }>;
}
