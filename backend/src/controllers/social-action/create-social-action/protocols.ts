import { SocialAction } from "../../../models/social-action";

export interface ICreateSocialActionParams {
  title: string;
  description: string;
  image: string;
  date: Date;
}

export interface ICreateSocialActionRepository {
  createSocialAction(params: ICreateSocialActionParams): Promise<SocialAction>;
}
