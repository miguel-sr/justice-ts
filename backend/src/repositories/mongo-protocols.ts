import { Category } from "../models/category";
import { Member } from "../models/member";
import { SocialAction } from "../models/social-action";
import { Sponsor } from "../models/sponsor";
import { Tip } from "../models/tip";
import { User } from "../models/user";
import { Video } from "../models/video";

export type MongoUser = Omit<User, "id">;
export type MongoCategory = Omit<Category, "id">;
export type MongoSocialAction = Omit<SocialAction, "id">;
export type MongoMember = Omit<Member, "id">;
export type MongoTip = Omit<Tip, "id">;
export type MongoVideo = Omit<Video, "id">;
export type MongoSponsor = Omit<Sponsor, "id">;
