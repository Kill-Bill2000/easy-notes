import { UserInterface } from "../../storage/interface/user-interface";
import { CategoryInterface } from "../../storage/interface/category-interface";

export class User implements UserInterface {
	userId: number;
	username: string;
	password: string;
	categories: CategoryInterface[];

	constructor(
		username: string,
		password: string,
		userId?: number,
		categories?: CategoryInterface[]
	) {
		this.username = username;
		this.password = password;
		this.userId = userId ? userId : 0;
		this.categories = categories
			? categories
			: new Array<CategoryInterface>();
	}
}
