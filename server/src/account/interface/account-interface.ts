import { UserInterface } from "./user-interface";

export interface IAccount {
	saveUser(user: UserInterface): Promise<boolean>;
	getUserById(userId: number): Promise<UserInterface>;
}
