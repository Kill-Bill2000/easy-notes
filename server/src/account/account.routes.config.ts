import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
export class AccountRoutesConfig extends CommonRoutesConfig {
	constructor(app: express.Application) {
		super(app, "UsersRoutes");
	}

	configureRoutes() {
		this.app
			.route(`/hello`)
			.get((req: express.Request, res: express.Response) => {
				res.status(200).send(`hello`);
			})
			.post((req: express.Request, res: express.Response) => {
				res.status(200).send(req.body.name);
			});

		return this.app;
	}
}
