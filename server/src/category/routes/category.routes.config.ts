import express from "express";
import { CommonRoutesConfig } from "../../common/common.routes.config";
import category from "../controller/category";

export class CategoryRoutesConfig extends CommonRoutesConfig {
	constructor(app: express.Application) {
		super(app, "UsersRoutes");
	}

	configureRoutes() {
		this.app
			.route(`/categories`)
			.post((req: express.Request, res: express.Response) => {
				category.getAllCategories(req, res);
			});

		this.app
			.route(`/category`)
			.post((req: express.Request, res: express.Response) => {
				category.saveCategory(req, res);
			});

		return this.app;
	}
}
