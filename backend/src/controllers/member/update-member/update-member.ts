import { IUpdateMemberParams, IUpdateMemberRepository } from "./protocols";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { Member } from "../../../models/member";

export class UpdateMemberController implements IController {
  constructor(
    private readonly updateMemberRepository: IUpdateMemberRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<IUpdateMemberParams>
  ): Promise<IHttpResponse<Member | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return badRequest("Missing member id.");
      }

      if (!body) {
        return badRequest("Body missing fields.");
      }

      const allowedFieldsToUpdate: (keyof IUpdateMemberParams)[] = [
        "name",
        "role",
        "text",
        "image",
      ];
      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) =>
          !allowedFieldsToUpdate.includes(key as keyof IUpdateMemberParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Some received field is not allowed.");
      }

      const member = await this.updateMemberRepository.updateMember(id, body);
      return ok<Member>(member);
    } catch (error) {
      return serverError();
    }
  }
}
