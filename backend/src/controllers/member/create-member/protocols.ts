import { Member } from "../../../models/member";

export interface ICreateMemberParams {
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface ICreateMemberRepository {
  createMember(params: ICreateMemberParams): Promise<Member>;
}
