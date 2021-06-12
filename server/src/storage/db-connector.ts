import mongoose from "mongoose";
import { UserModel } from "./model/user-model";

export class DbConnector {
	async connect() {
		await mongoose.connect("mongodb://localhost:27017/easy-notes", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		const db = mongoose.connection;
		db.on("error", console.error.bind(console, "connection error:"));
		db.once("open", function () {
			console.log("Connected to DB");
		});
	}

	async getUsers(): Promise<void> {
		//Do request here
	}
}
