import mongoose from "mongoose";
import { noteSchema } from "../../note/schema/note-schema";
import { CategoryInterface } from "../interface/category-interface";

export const categorySchema = new mongoose.Schema<CategoryInterface>({
	category_id: { type: mongoose.Types.ObjectId },
	title: { type: String, required: true },
	notes: [noteSchema],
});
