import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IUpdateTipParams, IUpdateTipRepository } from "./protocols";
import { Tip } from "../../../models/tip";

export class UpdateTipController implements IController {
  constructor(private readonly updateTipRepository: IUpdateTipRepository) {}
  async handle(
    httpRequest: IHttpRequest<IUpdateTipParams>
  ): Promise<IHttpResponse<Tip | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return badRequest("Missing tip id.");
      }

      if (!body) {
        return badRequest("Body missing fields.");
      }

      const allowedFieldsToUpdate: (keyof IUpdateTipParams)[] = [
        "name",
        "role",
        "text",
        "image",
      ];
      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof IUpdateTipParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Some received field is not allowed.");
      }

      const member = await this.updateTipRepository.updateTip(id, body);
      return ok<Tip>(member);
    } catch (error) {
      return serverError();
    }
  }
}
