import { Tip } from "../../../models/tip";

export interface IUpdateTipParams {
  name?: string;
  role?: string;
  text?: string;
  image?: string;
}

export interface IUpdateTipRepository {
  updateTip(id: string, params: IUpdateTipParams): Promise<Tip>;
}
