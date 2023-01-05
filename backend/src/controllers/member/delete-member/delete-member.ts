import { Member } from "../../../models/member";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeleteMemberRepository } from "./protocols";

export class DeleteMemberController implements IController {
  constructor(
    private readonly deleteMemberRepository: IDeleteMemberRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Member | string>> {
    try {
      const id = httpRequest?.params?.id;
      if (!id) {
        return badRequest("Missing member id.");
      }
      const member = await this.deleteMemberRepository.deleteMember(id);
      return ok<Member>(member);
    } catch (error) {
      return serverError();
    }
  }
}
