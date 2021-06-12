import mongoose from "mongoose";
import { noteSchema } from "./note-schema";
import { CategoryInterface } from "../interfaces/category-interface";

export const categorySchema = new mongoose.Schema<CategoryInterface>({
	category_id: { type: mongoose.Types.ObjectId, required: true },
	title: { type: String, required: true },
	notes: [noteSchema],
});
