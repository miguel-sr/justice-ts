import { SocialAction } from "../../../models/social-action";

export interface IGetSocialActionsRepository {
  getSocialActions(id?: string): Promise<SocialAction[] | SocialAction>;
}
