import { Tip } from "../../../models/tip";

export interface IDeleteTipRepository {
  deleteTip(id: string): Promise<Tip>;
}
