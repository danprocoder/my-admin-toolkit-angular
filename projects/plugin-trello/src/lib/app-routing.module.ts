import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BoardsComponent } from './boards/boards.component';
import { BoardListsComponent } from './board-lists/board-lists.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'trello', component: BoardsComponent },
      { path: 'trello/board/:id', component: BoardListsComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
