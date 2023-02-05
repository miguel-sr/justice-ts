import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { Part } from "../../../models/part";
import { IGetPartsPaginationRepository } from "./protocols";

export class GetPartsPaginationController implements IController {
  constructor(
    private readonly getPartsPaginationRepository: IGetPartsPaginationRepository
  ) {}

  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Part[] | { numberOfDocuments: number } | string>> {
    try {
      const itemsPerPage = httpRequest?.params?.itemsPerPage;
      const skip = httpRequest?.params?.skip;

      const parts = await this.getPartsPaginationRepository.getParts(
        itemsPerPage,
        skip
      );

      return ok<Part[] | { numberOfDocuments: number }>(parts);
    } catch (error) {
      return serverError();
    }
  }
}
