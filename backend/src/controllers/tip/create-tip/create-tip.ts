import { badRequest, created, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { ICreateTipParams, ICreateTipRepository } from "./protocols";
import { Tip } from "../../../models/tip";

export class CreateTipController implements IController {
  constructor(private readonly createTipRepository: ICreateTipRepository) {}

  async handle(
    httpRequest: IHttpRequest<ICreateTipParams>
  ): Promise<IHttpResponse<Tip | string>> {
    try {
      const requiredFields = ["name", "role", "text", "image"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof ICreateTipParams]?.valueOf) {
          return badRequest(`Field ${field} is required.`);
        }
      }

      if (httpRequest.body) {
        const tip = await this.createTipRepository.createTip(httpRequest.body);

        return created<Tip>(tip);
      }
      return serverError();
    } catch (error) {
      return serverError();
    }
  }
}
