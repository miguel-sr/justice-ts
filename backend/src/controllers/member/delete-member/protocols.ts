import { Member } from "../../../models/member";

export interface IDeleteMemberRepository {
  deleteMember(id: string): Promise<Member>;
}
