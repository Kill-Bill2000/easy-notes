import express from "express";
import { DbConnector } from "./src/storage/db-connector";
const app = express();
const port = 8000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/account", (req, res) => {
	res.send("Account!");
});

app.get("/note", (req, res) => {
	res.send("Note!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
	const db = new DbConnector();
	db.connect();
});
