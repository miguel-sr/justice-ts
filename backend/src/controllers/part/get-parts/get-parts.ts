import { Part } from "../../../models/part";
import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetPartsRepository } from "./protocols";

export class GetPartsController implements IController {
  constructor(private readonly getPartsRepository: IGetPartsRepository) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Part[] | Part | string>> {
    try {
      const id = httpRequest?.params?.id;
      const parts = await this.getPartsRepository.getParts(id);
      return ok<Part[] | Part>(parts);
    } catch (error) {
      return serverError();
    }
  }
}
