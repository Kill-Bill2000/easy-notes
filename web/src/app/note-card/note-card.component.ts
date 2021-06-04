import { Component, OnInit } from '@angular/core';
import { Category } from '../helpers/Category';
import { Note } from '../helpers/Note';
import { NotesService } from '../notes.service';
import { CookiesService } from '../cookies.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css'],
})
export class NoteCardComponent implements OnInit {
  category: Category;
  notes: Note[];
  fieldShown = false;
  addButtonShown = true;

  constructor(
    private notesService: NotesService,
    private cookiesService: CookiesService
  ) {}

  ngOnInit(): void {
    this.refreshNotes();
  }

  public refreshNotes() {
    this.cookiesService
      .getCategoryCookie()
      .subscribe((category) => (this.category = category));
    this.notesService
      .getNotesOfCategory(this.category)
      .subscribe((notes) => (this.notes = notes));
  }

  private toggleField(fieldVisible: boolean) {
    if (fieldVisible) {
      this.fieldShown = true;
      this.addButtonShown = false;
    } else {
      this.fieldShown = false;
      this.addButtonShown = true;
    }
  }

  public showField() {
    this.toggleField(true);
  }

  public addNote(note: string) {
    this.notesService.saveNote(new Note(note, this.category));
    console.log(note);
    this.toggleField(false);
    this.refreshNotes();
  }

  public deleteNote(note: Note) {
    this.notesService.deleteNote(note);
    this.refreshNotes();
  }
}
