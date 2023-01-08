import { Sponsor } from "../../../models/sponsor";

export interface IUpdateSponsorParams {
  name?: string;
  site?: string;
  logo?: string;
}

export interface IUpdateSponsorRepository {
  updateSponsor(id: string, params: IUpdateSponsorParams): Promise<Sponsor>;
}
