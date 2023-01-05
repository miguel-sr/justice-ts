import { SocialAction } from "../../../models/social-action";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeleteSocialActionRepository } from "./protocols";

export class DeleteCategoryController implements IController {
  constructor(
    private readonly deleteSocialActionRepository: IDeleteSocialActionRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<SocialAction | string>> {
    try {
      const id = httpRequest?.params?.id;
      if (!id) {
        return badRequest("Missing social action id.");
      }
      const socialAction =
        await this.deleteSocialActionRepository.deleteSocialAction(id);
      return ok<SocialAction>(socialAction);
    } catch (error) {
      return serverError();
    }
  }
}
