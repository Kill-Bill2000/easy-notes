import { UserInterface } from "./user-interface";

export interface IAccount {
	saveUser(user: UserInterface): boolean;
	getUserById(userId: number): UserInterface;
}
