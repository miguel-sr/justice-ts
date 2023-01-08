import { Sponsor } from "../../../models/sponsor";
import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetSponsorsRepository } from "./protocols";

export class GetSponsorsController implements IController {
  constructor(private readonly getSponsorsRepository: IGetSponsorsRepository) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Sponsor[] | Sponsor | string>> {
    try {
      const id = httpRequest?.params?.id;
      const sponsors = await this.getSponsorsRepository.getSponsors(id);
      return ok<Sponsor[] | Sponsor>(sponsors);
    } catch (error) {
      return serverError();
    }
  }
}
