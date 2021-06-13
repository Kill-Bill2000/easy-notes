import mongoose from "mongoose";
import { Request, Response } from "express";
import { CategoryModel } from "../model/category-model";
import { UserModel } from "../../account/model/user-model";
import account from "../../account/controller/account";
import { UserInterface } from "../../account/interface/user-interface";

const getAllCategories = (req: Request, res: Response) => {
	const { username, password } = req.body.user;

	return UserModel.find({ username, password }, "categories")
		.exec()
		.then((result) => {
			return res.status(201).json({
				categories: result,
			});
		})
		.catch((error) => {
			return res.status(500).json({
				message: error.message,
				error,
			});
		});
};

const saveCategory = (req: Request, res: Response) => {
	const { username, password, categories } = req.body.user;

	return UserModel.findOneAndUpdate(
		{ username, password },
		{ categories },
		{ new: true }
	)
		.then((result) => {
			return res.status(201).json({
				user: result,
			});
		})
		.catch((error) => {
			return res.status(500).json({
				message: error.message,
				error,
			});
		});
};

export default { getAllCategories, saveCategory };
