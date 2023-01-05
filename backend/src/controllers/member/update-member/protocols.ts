import { Member } from "../../../models/member";

export interface IUpdateMemberParams {
  name?: string;
  role?: string;
  text?: string;
  image?: string;
}

export interface IUpdateMemberRepository {
  updateMember(id: string, params: IUpdateMemberParams): Promise<Member>;
}
