import express from "express";
import * as http from "http";
import cors from "cors";
import { AccountRoutesConfig } from "./src/account/routes/account.routes.config";
import winston from "winston";
import expressWinston from "express-winston";
import debug from "debug";
import { CommonRoutesConfig } from "./src/common/common.routes.config";
import mongoose from "mongoose";
import { CategoryRoutesConfig } from "./src/category/routes/category.routes.config";
import { NotesRoutesConfig } from "./src/note/routes/category.routes.config";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 8000;
const portDB = 27017;
const routes: CommonRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug("app");

app.use(express.json());
app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = {
	transports: [new winston.transports.Console()],
	format: winston.format.combine(
		winston.format.json(),
		winston.format.prettyPrint(),
		winston.format.colorize({ all: true })
	),
};

if (!process.env.DEBUG) {
	loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

app.use(expressWinston.logger(loggerOptions));

routes.push(new AccountRoutesConfig(app));
routes.push(new CategoryRoutesConfig(app));
routes.push(new NotesRoutesConfig(app));

const runningMessage = `Server running at http://localhost:${port}`;

app.get("/", (req: express.Request, res: express.Response) => {
	res.status(200).send(runningMessage);
});

mongoose
	.connect(`mongodb://localhost:${portDB}/easy-notes`, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log(`Connected to DB at port ${portDB}`));

const con = mongoose.connection;

server.listen(port, () => {
	routes.forEach((route: CommonRoutesConfig) => {
		debugLog(`Routes configured for ${route.getName()}`);
	});
	// our only exception to avoiding console.log(), because we
	// always want to know when the server is done starting up
	console.log(runningMessage);
});
