import { CategoryInterface } from "./category-interface";

export interface UserInterface {
	userId: number;
	username: string;
	password: string;
	categories: CategoryInterface[];
}
