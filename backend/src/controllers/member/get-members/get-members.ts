import { Member } from "../../../models/member";
import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetMembersRepository } from "./protocols";

export class GetMembersController implements IController {
  constructor(private readonly getMembersRepository: IGetMembersRepository) {}

  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Member[] | Member | string>> {
    try {
      const id = httpRequest?.params?.id;
      const members = await this.getMembersRepository.getMembers(id);
      return ok<Member[] | Member>(members);
    } catch (error) {
      return serverError();
    }
  }
}
