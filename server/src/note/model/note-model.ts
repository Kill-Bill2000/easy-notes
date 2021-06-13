import mongoose from "mongoose";
import { noteSchema } from "../schema/note-schema";
import { NoteInterface } from "../interface/note-interface";

export const NoteModel = mongoose.model<NoteInterface>("Note", noteSchema);
