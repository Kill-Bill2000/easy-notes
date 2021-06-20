import { Component, OnInit } from '@angular/core';
import { Category } from '../helpers/Category';
import { Note } from '../helpers/Note';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../common/service/notes/notes.service';
import { NoteHttpObj } from '../common/service/notes/model/noteHttpObj';
import { CategoryHttpObj } from '../common/service/notes/model/categoryHttpObj';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css'],
})
export class NoteCardComponent implements OnInit {
  category: CategoryHttpObj;
  fieldShown = false;
  addButtonShown = true;
  id: string;

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((val) => {
      this.route.paramMap.subscribe((params) => {
        this.id = params.get('id');
      });
      this.refreshNotes();
    });
  }

  ngOnInit(): void {
    this.refreshNotes();
  }

  public refreshNotes() {
    this.notesService.getCategories().subscribe((list) => {
      this.category = list.categories[0].categories.find(
        (cat: CategoryHttpObj) => cat._id === this.id
      );
    });
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
    // this.notesService.saveNote({description: note, checked: false});
    console.log(note);
    this.toggleField(false);
    this.refreshNotes();
  }

  public deleteNote(note: Note) {
    // this.notesService.deleteNote(note);
    this.refreshNotes();
  }

  public checkNote(checkedNote: NoteHttpObj) {
    let updatedCat = this.category;
    updatedCat.notes.find((note) => {
      return note._id === checkedNote._id;
    }).checked = checkedNote.checked;

    this.notesService.getCategories().subscribe((catList) => {
      this.notesService
        .updateCategory(updatedCat, catList)
        .subscribe(() => this.refreshNotes());
    });
  }
}
