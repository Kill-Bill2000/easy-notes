import express from "express";
import { CommonRoutesConfig } from "../../common/common.routes.config";
import account from "../controller/account";

export class AccountRoutesConfig extends CommonRoutesConfig {
	constructor(app: express.Application) {
		super(app, "UsersRoutes");
	}

	configureRoutes() {
		this.app
			.route(`/account`)
			.post((req: express.Request, res: express.Response) => {
				account.checkUser(req, res);
			})
			.post((req: express.Request, res: express.Response) => {
				account.saveUser(req, res);
			});

		return this.app;
	}
}
