import { NoteInterface } from "./note-interface";
export interface CategoryInterface {
	categoryId: number;
	title: string;
	notes: NoteInterface[];
}
