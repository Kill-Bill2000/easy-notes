import { UserInterface } from "../interface/user-interface";
import { IAccount } from "../interface/account-interface";

export class Account implements IAccount {
	getUserById(userId: number): UserInterface {
		throw new Error("Method not implemented.");
	}
	saveUser(user: UserInterface): boolean {
		throw new Error("Method not implemented.");
	}
}
