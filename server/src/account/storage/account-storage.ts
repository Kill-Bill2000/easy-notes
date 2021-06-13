import { UserInterface } from "../interface/user-interface";
import { UserModel } from "../model/user-model";

export class AccountStorage {
	async saveUser(user: UserInterface): Promise<boolean> {
		const userDoc = new UserModel({
			username: user.username,
			password: user.password,
		});

		await userDoc.save();

		return userDoc.username.length > 0;
	}
}
