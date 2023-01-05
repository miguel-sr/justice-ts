import {
  ICreateSocialActionParams,
  ICreateSocialActionRepository,
} from "./protocols";
import { badRequest, created, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { SocialAction } from "../../../models/social-action";

export class CreateSocialActionController implements IController {
  constructor(
    private readonly createSocialActionRepository: ICreateSocialActionRepository
  ) {}

  async handle(
    httpRequest: IHttpRequest<ICreateSocialActionParams>
  ): Promise<IHttpResponse<SocialAction | string>> {
    try {
      const requiredFields = ["title", "description", "image", "date"];

      for (const field of requiredFields) {
        if (
          !httpRequest?.body?.[field as keyof ICreateSocialActionParams]
            ?.valueOf
        ) {
          return badRequest(`Field ${field} is required.`);
        }
      }

      if (httpRequest.body) {
        const socialAction =
          await this.createSocialActionRepository.createSocialAction(
            httpRequest.body
          );

        return created<SocialAction>(socialAction);
      }
      return serverError();
    } catch (error) {
      return serverError();
    }
  }
}
