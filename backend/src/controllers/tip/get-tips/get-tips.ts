import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetTipsParams, IGetTipsRepository } from "./protocols";
import { Tip } from "../../../models/tip";

export class GetTipsController implements IController {
  constructor(private readonly getTipsRepository: IGetTipsRepository) {}

  async handle(
    httpRequest: IHttpRequest<IGetTipsParams>
  ): Promise<
    IHttpResponse<Tip[] | Tip | { numberOfDocuments: number } | string>
  > {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      const tips = await this.getTipsRepository.getTips(id, body);
      return ok<Tip[] | Tip | { numberOfDocuments: number }>(tips);
    } catch (error) {
      return serverError();
    }
  }
}
