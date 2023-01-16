import { Tip } from "../../../models/tip";

export interface ICreateTipParams {
  name: string;
  role: string;
  text: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateTipRepository {
  createTip(params: ICreateTipParams): Promise<Tip>;
}
