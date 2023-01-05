import { Member } from "../../../models/member";

export interface IGetMembersRepository {
  getMembers(id?: string): Promise<Member[] | Member>;
}
