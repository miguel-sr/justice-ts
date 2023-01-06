import { User } from "../../../models/user";
import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetUsersRepository } from "./protocols";

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<User[] | User | string>> {
    try {
      const id = httpRequest?.params?.id;
      const users = await this.getUsersRepository.getUsers(id);
      return ok<User[] | User>(users);
    } catch (error) {
      return serverError();
    }
  }
}
