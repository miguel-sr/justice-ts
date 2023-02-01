import { Tip } from "../../../models/tip";

export interface IGetTipsRepository {
  getTips(id?: string): Promise<Tip[] | Tip>;
}
