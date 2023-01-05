import { SocialAction } from "../../../models/social-action";
import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetSocialActionsRepository } from "./protocols";

export class GetSocialActionsController implements IController {
  constructor(
    private readonly getSocialActionsRepository: IGetSocialActionsRepository
  ) {}

  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<SocialAction[] | SocialAction | string>> {
    try {
      const id = httpRequest?.params?.id;
      const socialActions =
        await this.getSocialActionsRepository.getSocialActions(id);
      return ok<SocialAction[] | SocialAction>(socialActions);
    } catch (error) {
      return serverError();
    }
  }
}
