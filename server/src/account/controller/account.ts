import { UserInterface } from "../interface/user-interface";
import { IAccount } from "../interface/account-interface";
import { NextFunction, Request, Response } from "express";
import { UserModel } from "../model/user-model";
import mongoose from "mongoose";

// export class Account implements IAccount {
// 	constructor(private accountStorage: AccountStorage) {}

// 	getUserById(userId: number): Promise<UserInterface> {
// 		throw new Error("Method not implemented.");
// 	}

// 	saveUser(user: UserInterface): Promise<boolean> {
// 		return this.accountStorage.saveorUpdateUser(user);
// 	}
// }

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

export default { saveUser };
