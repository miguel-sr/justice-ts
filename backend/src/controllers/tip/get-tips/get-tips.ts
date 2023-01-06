import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetTipsRepository } from "./protocols";
import { Tip } from "../../../models/tip";

export class GetTipsController implements IController {
  constructor(private readonly getTipsRepository: IGetTipsRepository) {}

  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Tip[] | Tip | string>> {
    try {
      const id = httpRequest?.params?.id;
      const tips = await this.getTipsRepository.getTips(id);
      return ok<Tip[] | Tip>(tips);
    } catch (error) {
      return serverError();
    }
  }
}
