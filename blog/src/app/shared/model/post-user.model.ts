import { PostModel } from "./post.model";
import { UserModel } from "./user.model";

export interface PostUserModel{
    post:PostModel,
    user:UserModel
}