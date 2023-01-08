import { Sponsor } from "../../../models/sponsor";

export interface IDeleteSponsorRepository {
  deleteSponsor(id: string): Promise<Sponsor>;
}
