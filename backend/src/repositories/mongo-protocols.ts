import { Category } from "../models/category";
import { Member } from "../models/member";
import { SocialAction } from "../models/social-action";
import { User } from "../models/user";

export type MongoUser = Omit<User, "id">;
export type MongoCategory = Omit<Category, "id">;
export type MongoSocialAction = Omit<SocialAction, "id">;
export type MongoMember = Omit<Member, "id">;
