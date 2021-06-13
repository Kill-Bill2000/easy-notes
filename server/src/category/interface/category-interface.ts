import { NoteInterface } from "../../note/interface/note-interface";
export interface CategoryInterface {
	categoryId: number;
	title: string;
	notes: NoteInterface[];
}
