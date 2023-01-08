import { Sponsor } from "../../../models/sponsor";
import { badRequest, created, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { ICreateSponsorParams, ICreateSponsorRepository } from "./protocols";

export class CreateSponsorController implements IController {
  constructor(
    private readonly createSponsorRepository: ICreateSponsorRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<ICreateSponsorParams>
  ): Promise<IHttpResponse<Sponsor | string>> {
    try {
      const requiredFields = ["name", "logo"];

      for (const field of requiredFields) {
        if (
          !httpRequest?.body?.[field as keyof ICreateSponsorParams]?.valueOf
        ) {
          return badRequest(`Field ${field} is required.`);
        }
      }

      if (httpRequest.body) {
        const sponsor = await this.createSponsorRepository.createSponsor(
          httpRequest.body
        );

        return created<Sponsor>(sponsor);
      }
      return serverError();
    } catch (error) {
      return serverError();
    }
  }
}
