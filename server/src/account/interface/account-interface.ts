import { UserInterface } from "../../storage/interface/user-interface";

export interface IAccount {
	saveUser(user: UserInterface): boolean;
	getUserById(userId: number): UserInterface;
}
