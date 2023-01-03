import { Category } from "../models/category";
import { User } from "../models/user";

export type MongoUser = Omit<User, "id">;
export type MongoCategory = Omit<Category, "id">;
