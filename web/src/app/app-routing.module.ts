import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteCardComponent } from './note-card/note-card.component';

const routes: Routes = [{ path: 'category/:id', component: NoteCardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
