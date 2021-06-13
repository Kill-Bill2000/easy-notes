import mongoose from "mongoose";
import { NoteInterface } from "../interface/note-interface";

export const noteSchema = new mongoose.Schema<NoteInterface>({
	note_id: {
		type: mongoose.Types.ObjectId,
	},
	description: { type: String, required: true },
	checked: Boolean,
});
