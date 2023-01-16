import { Tip } from "../../../models/tip";

export interface IUpdateTipParams {
  name?: string;
  role?: string;
  text?: string;
  image?: string;
  updatedAt: Date;
}

export interface IUpdateTipRepository {
  updateTip(id: string, params: IUpdateTipParams): Promise<Tip>;
}
