import express from "express";
import { CommonRoutesConfig } from "../../common/common.routes.config";
import note from "../controller/note";

export class NotesRoutesConfig extends CommonRoutesConfig {
	constructor(app: express.Application) {
		super(app, "UsersRoutes");
	}

	configureRoutes() {
		this.app
			.route(`/notes`)
			.post((req: express.Request, res: express.Response) => {
				note.getAllNotes(req, res);
			});

		this.app
			.route(`/note`)
			.post((req: express.Request, res: express.Response) => {
				note.saveNote(req, res);
			});

		return this.app;
	}
}
