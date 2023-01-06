import { Tip } from "../../../models/tip";

export interface ICreateTipParams {
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface ICreateTipRepository {
  createTip(params: ICreateTipParams): Promise<Tip>;
}
