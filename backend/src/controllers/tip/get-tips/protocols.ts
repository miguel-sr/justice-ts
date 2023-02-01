import { Tip } from "../../../models/tip";

export interface IGetTipsParams {
  skip?: number;
  isCountingDocuments?: boolean;
}

export interface IGetTipsRepository {
  getTips(
    id?: string,
    params?: IGetTipsParams
  ): Promise<Tip[] | Tip | { numberOfDocuments: number }>;
}
