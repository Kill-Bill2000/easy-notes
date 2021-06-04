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
}
