import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import { IAccount } from "./interface/account-interface";
import { Account } from "./model/account";
import { User } from "./model/user";

export class AccountRoutesConfig extends CommonRoutesConfig {
	constructor(app: express.Application) {
		super(app, "UsersRoutes");
	}

	configureRoutes() {
		this.app
			.route(`/account`)
			.post((req: express.Request, res: express.Response) => {
				const account: IAccount = new Account();
				const user: User = req.body.user;
				account.saveUser(user);
			});

		return this.app;
	}
}
