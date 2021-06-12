import mongoose from "mongoose";
import { userSchema } from "../schema/user-schema";
import { UserInterface } from "../interfaces/user-interface";

export const UserModel = mongoose.model<UserInterface>("User", userSchema);
