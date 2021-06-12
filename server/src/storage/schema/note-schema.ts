import mongoose from "mongoose";
import { NoteInterface } from "../interfaces/note-interface";

export const noteSchema = new mongoose.Schema<NoteInterface>({
	note_id: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
	description: { type: String, required: true },
	checked: Boolean,
});
