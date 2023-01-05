import { SocialAction } from "../../../models/social-action";

export interface IUpdateSocialActionParams {
  title?: string;
  description?: string;
  image?: string;
  date?: Date;
}

export interface IUpdateSocialActionRepository {
  updateSocialAction(
    id: string,
    params: IUpdateSocialActionParams
  ): Promise<SocialAction>;
}
