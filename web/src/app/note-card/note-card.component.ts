import { Component, OnInit } from '@angular/core';
import { Category } from '../helpers/Category';
import { Note } from '../helpers/Note';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../common/service/notes/notes.service';

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
  id: number;

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((val) => {
      this.route.paramMap.subscribe((params) => {
        this.id = +params.get('id');
      });
      this.refreshNotes();
    });
  }

  ngOnInit(): void {}

  public refreshNotes() {
    this.notesService
      .getCategoryFromId(this.id)
      .subscribe((cat) => (this.category = cat));
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
