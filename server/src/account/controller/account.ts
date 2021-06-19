import { UserModel } from "../model/user-model";
import mongoose from "mongoose";
import { Request, Response } from "express";
import { UserInterface } from "../interface/user-interface";

const saveUser = (req: Request, res: Response) => {
	const { username, password } = req.body.user;

	const user = new UserModel({
		user_id: new mongoose.Types.ObjectId(),
		username,
		password,
	});

	return user
		.save()
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

const getUserByUsername = (req: Request, res: Response) => {
	const { username } = req.body.user;

	return UserModel.findOne({ username })
		.exec()
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

const checkUser = (req: Request, res: Response) => {
	const { username, password } = req.body.user;

	return UserModel.findOne({ username })
		.exec()
		.then((result) => {
			if (result?.password === password) {
				return res.status(201).json({
					user: result,
				});
			} else {
				return res.status(500).json({
					message: "Invalid user credentials provided",
				});
			}
		})
		.catch((error) => {
			return res.status(500).json({
				message: error.message,
				error,
			});
		});
};

export default { saveUser, checkUser };
