import mongoose from "mongoose";

export class DbConnector {
	async connect() {
		mongoose.connect("mongodb://localhost:27017/easy-notes", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		const db = mongoose.connection;
		db.on("error", console.error.bind(console, "connection error:"));
		db.once("open", this.initDb);
	}

	private async initDb() {
		console.log("Connected to DB");
	}
}
