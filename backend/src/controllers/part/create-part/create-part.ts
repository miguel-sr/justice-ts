import { Part } from "../../../models/part";
import { badRequest, created, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { ICreatePartParams, ICreatePartRepository } from "./protocols";

export class CreatePartController implements IController {
  constructor(private readonly createPartRepository: ICreatePartRepository) {}
  async handle(
    httpRequest: IHttpRequest<ICreatePartParams>
  ): Promise<IHttpResponse<Part | string>> {
    try {
      const requiredFields = [
        "category",
        "name",
        "description",
        "inventory",
        "limitPerOrder",
        "image",
      ];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof ICreatePartParams]?.valueOf) {
          return badRequest(`Field ${field} is required.`);
        }
      }

      if (httpRequest.body) {
        const part = await this.createPartRepository.createPart(
          httpRequest.body
        );

        return created<Part>(part);
      }
      return serverError();
    } catch (error) {
      return serverError();
    }
  }
}
