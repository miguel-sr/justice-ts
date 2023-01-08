import { Sponsor } from "../../../models/sponsor";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IUpdateSponsorParams, IUpdateSponsorRepository } from "./protocols";

export class UpdateSponsorController implements IController {
  constructor(
    private readonly updateSponsorRepository: IUpdateSponsorRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<IUpdateSponsorParams>
  ): Promise<IHttpResponse<Sponsor | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return badRequest("Missing sponsor id.");
      }

      if (!body) {
        return badRequest("Body missing fields.");
      }

      const allowedFieldsToUpdate: (keyof IUpdateSponsorParams)[] = [
        "name",
        "site",
        "logo",
      ];

      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) =>
          !allowedFieldsToUpdate.includes(key as keyof IUpdateSponsorParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Some received field is not allowed.");
      }

      const sponsor = await this.updateSponsorRepository.updateSponsor(
        id,
        body
      );

      return ok<Sponsor>(sponsor);
    } catch (error) {
      return serverError();
    }
  }
}
