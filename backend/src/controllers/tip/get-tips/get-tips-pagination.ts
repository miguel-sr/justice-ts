import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetTipsPaginationRepository } from "./protocols";
import { Tip } from "../../../models/tip";

export class GetTipsPaginationController implements IController {
  constructor(
    private readonly getTipsPaginationRepository: IGetTipsPaginationRepository
  ) {}

  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Tip[] | { numberOfDocuments: number } | string>> {
    try {
      const itemsPerPage = httpRequest?.params?.itemsPerPage;
      const skip = httpRequest?.params?.skip;

      const tips = await this.getTipsPaginationRepository.getTips(
        itemsPerPage,
        skip
      );

      return ok<Tip[] | { numberOfDocuments: number }>(tips);
    } catch (error) {
      return serverError();
    }
  }
}
