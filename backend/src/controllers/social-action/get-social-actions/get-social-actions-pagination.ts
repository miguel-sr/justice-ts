import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { SocialAction } from "../../../models/social-action";
import { IGetSocialActionsPaginationRepository } from "./protocols";

export class GetSocialActionsPaginationController implements IController {
  constructor(
    private readonly getSocialActionPaginationRepository: IGetSocialActionsPaginationRepository
  ) {}

  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<
    IHttpResponse<SocialAction[] | { numberOfDocuments: number } | string>
  > {
    try {
      const itemsPerPage = httpRequest?.params?.itemsPerPage;
      const skip = httpRequest?.params?.skip;

      const socialActions =
        await this.getSocialActionPaginationRepository.getSocialActions(
          itemsPerPage,
          skip
        );

      return ok<SocialAction[] | { numberOfDocuments: number }>(socialActions);
    } catch (error) {
      return serverError();
    }
  }
}
