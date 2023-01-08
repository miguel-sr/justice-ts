import { Sponsor } from "../../../models/sponsor";

export interface IGetSponsorsRepository {
  getSponsors(id?: string): Promise<Sponsor[] | Sponsor>;
}
