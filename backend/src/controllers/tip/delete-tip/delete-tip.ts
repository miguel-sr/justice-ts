import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeleteTipRepository } from "./protocols";
import { Tip } from "../../../models/tip";

export class DeleteTipController implements IController {
  constructor(private readonly deleteTipRepository: IDeleteTipRepository) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Tip | string>> {
    try {
      const id = httpRequest?.params?.id;
      if (!id) {
        return badRequest("Missing tip id.");
      }
      const tip = await this.deleteTipRepository.deleteTip(id);
      return ok<Tip>(tip);
    } catch (error) {
      return serverError();
    }
  }
}
