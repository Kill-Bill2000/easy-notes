import { NoteHttpObj } from './noteHttpObj';
export interface CategoryHttpObj {
  _id: string;
  title: string;
  notes: NoteHttpObj[];
}
