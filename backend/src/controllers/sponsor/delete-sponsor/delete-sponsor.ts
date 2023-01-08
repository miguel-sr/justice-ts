import { Sponsor } from "../../../models/sponsor";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeleteSponsorRepository } from "./protocols";

export class DeleteSponsorController implements IController {
  constructor(
    private readonly deleteSponsorRepository: IDeleteSponsorRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Sponsor | string>> {
    try {
      const id = httpRequest?.params?.id;
      if (!id) {
        return badRequest("Missing sponsor id.");
      }
      const sponsor = await this.deleteSponsorRepository.deleteSponsor(id);
      return ok<Sponsor>(sponsor);
    } catch (error) {
      return serverError();
    }
  }
}
