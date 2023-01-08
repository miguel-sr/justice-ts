import { Part } from "../../../models/part";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeletePartRepository } from "./protocols";

export class DeletePartController implements IController {
  constructor(private readonly deletePartRepository: IDeletePartRepository) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Part | string>> {
    try {
      const id = httpRequest?.params?.id;
      if (!id) {
        return badRequest("Missing part id.");
      }
      const part = await this.deletePartRepository.deletePart(id);
      return ok<Part>(part);
    } catch (error) {
      return serverError();
    }
  }
}
