import { User } from "../../../models/user";

export interface IGetUsersRepository {
  getUsers(id?: string): Promise<User[] | User>;
}
