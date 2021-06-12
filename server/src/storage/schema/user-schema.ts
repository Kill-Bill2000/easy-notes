import mongoose from "mongoose";
import { categorySchema } from "./category-schema";
import { UserInterface } from "../interface/user-interface";

export const userSchema = new mongoose.Schema<UserInterface>({
	user_id: {
		type: mongoose.Types.ObjectId,
	},
	username: { type: String, required: true },
	password: { type: String, required: true },
	categories: [categorySchema],
});
