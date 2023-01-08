import { Part } from "../../../models/part";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IUpdatePartParams, IUpdatePartRepository } from "./protocols";

export class UpdatePartController implements IController {
  constructor(private readonly updatePartRepository: IUpdatePartRepository) {}
  async handle(
    httpRequest: IHttpRequest<IUpdatePartParams>
  ): Promise<IHttpResponse<Part | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return badRequest("Missing part id.");
      }

      if (!body) {
        return badRequest("Body missing fields.");
      }

      const allowedFieldsToUpdate: (keyof IUpdatePartParams)[] = [
        "category",
        "name",
        "description",
        "inventory",
        "limitPerOrder",
        "image",
      ];

      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof IUpdatePartParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Some received field is not allowed.");
      }

      const part = await this.updatePartRepository.updatePart(id, body);
      return ok<Part>(part);
    } catch (error) {
      return serverError();
    }
  }
}
