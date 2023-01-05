import { SocialAction } from "../../../models/social-action";

export interface IDeleteSocialActionRepository {
  deleteSocialAction(id: string): Promise<SocialAction>;
}
