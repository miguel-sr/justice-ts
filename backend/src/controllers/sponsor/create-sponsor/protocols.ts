import { Sponsor } from "../../../models/sponsor";

export interface ICreateSponsorParams {
  name: string;
  site: string;
  logo: string;
}

export interface ICreateSponsorRepository {
  createSponsor(params: ICreateSponsorParams): Promise<Sponsor>;
}
