import { Request, Response } from "express";
import { UserModel } from "../../account/model/user-model";

const getAllNotes = (req: Request, res: Response) => {
	const { username, password, categories, notes } = req.body.user;

	return UserModel.find({ username, password, categories }, "notes")
		.exec()
		.then((result) => {
			return res.status(201).json({
				notes: result,
			});
		})
		.catch((error) => {
			return res.status(500).json({
				message: error.message,
				error,
			});
		});
};

const saveNote = (req: Request, res: Response) => {
	const { username, password, categories } = req.body.user;

	return UserModel.findOneAndUpdate(
		{ username, password },
		{ categories },
		{ new: true }
	)
		.then((result) => {
			return res.status(201).json({
				user: result,
			});
		})
		.catch((error) => {
			return res.status(500).json({
				message: error.message,
				error,
			});
		});
};

export default { getAllNotes, saveNote };
