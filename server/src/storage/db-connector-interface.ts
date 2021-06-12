import { UserInterface } from "./interface/user-interface";
export interface IDbConnector {
	connect(): void;
	saveUser(user: UserInterface): Promise<boolean>;
	getUserById(userId: number): Promise<UserInterface>;
}
