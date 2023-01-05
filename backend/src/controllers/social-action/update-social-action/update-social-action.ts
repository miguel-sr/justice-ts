import {
  IUpdateSocialActionParams,
  IUpdateSocialActionRepository,
} from "./protocols";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { SocialAction } from "../../../models/social-action";

export class UpdateSocialActionController implements IController {
  constructor(
    private readonly updateSocialActionRepository: IUpdateSocialActionRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<IUpdateSocialActionParams>
  ): Promise<IHttpResponse<SocialAction | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return badRequest("Missing social action id.");
      }

      if (!body) {
        return badRequest("Body missing filds.");
      }

      const allowedFieldsToUpdate: (keyof IUpdateSocialActionParams)[] = [
        "title",
        "description",
        "image",
        "date",
      ];
      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) =>
          !allowedFieldsToUpdate.includes(
            key as keyof IUpdateSocialActionParams
          )
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Some received field is not allowed.");
      }

      const socialAction =
        await this.updateSocialActionRepository.updateSocialAction(id, body);
      return ok<SocialAction>(socialAction);
    } catch (error) {
      return serverError();
    }
  }
}
