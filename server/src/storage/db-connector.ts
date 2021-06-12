import mongoose from "mongoose";
import { IDbConnector } from "./db-connector-interface";
import { UserInterface } from "./interface/user-interface";
import { UserModel } from "./model/user-model";

const port = 27017;

export class DbConnector implements IDbConnector {
	async connect() {
		await mongoose.connect(`mongodb://localhost:${port}/easy-notes`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		const db = mongoose.connection;
		db.on("error", console.error.bind(console, "connection error:"));
		console.log(`Connected to DB on Port ${port}!`);
	}

	async saveUser(user: UserInterface): Promise<boolean> {
		const userDoc = new UserModel({
			username: user.username,
			password: user.password,
		});

		await userDoc.save();

		return userDoc.username.length > 0;
	}

	async getUserById(userId: number): Promise<UserInterface> {
		throw new Error("Method not implemented.");
	}
}
