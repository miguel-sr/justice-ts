import { SocialAction } from "../../../models/social-action";

export interface IGetSocialActionsRepository {
  getSocialActions(id?: string): Promise<SocialAction[] | SocialAction>;
}

export interface IGetSocialActionsPaginationRepository {
  getSocialActions(
    itemsPerPage?: string,
    skip?: string
  ): Promise<SocialAction[] | { numberOfDocuments: number }>;
}
