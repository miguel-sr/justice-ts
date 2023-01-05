import { ICreateMemberParams, ICreateMemberRepository } from "./protocols";
import { badRequest, created, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { Member } from "../../../models/member";

export class CreateMemberController implements IController {
  constructor(
    private readonly createMemberRepository: ICreateMemberRepository
  ) {}

  async handle(
    httpRequest: IHttpRequest<ICreateMemberParams>
  ): Promise<IHttpResponse<Member | string>> {
    try {
      const requiredFields = ["name", "role", "text", "image"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof ICreateMemberParams]?.valueOf) {
          return badRequest(`Field ${field} is required.`);
        }
      }

      if (httpRequest.body) {
        const member = await this.createMemberRepository.createMember(
          httpRequest.body
        );

        return created<Member>(member);
      }
      return serverError();
    } catch (error) {
      return serverError();
    }
  }
}
