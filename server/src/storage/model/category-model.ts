import mongoose from "mongoose";
import { categorySchema } from "../schema/category-schema";
import { CategoryInterface } from "../interface/category-interface";

export const CategoryModel = mongoose.model<CategoryInterface>(
	"Category",
	categorySchema
);
