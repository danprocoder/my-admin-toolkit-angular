import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AdminToolkitModule, FeatherIconModule } from 'admin-toolkit';
import { PluginTrelloComponent } from './plugin-trello/plugin-trello.component';
import { CardComponent } from './trello-list/card.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardListsComponent } from './board-lists/board-lists.component';
import { TrelloCardComponent } from './trello-card/trello-card.component';
import { TrelloNewCardComponent } from './trello-new-card/trello-new-card.component';

@NgModule({
  declarations: [
    PluginTrelloComponent,
    CardComponent,
    BoardsComponent,
    BoardListsComponent,
    TrelloCardComponent,
    TrelloNewCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminToolkitModule,
    AppRoutingModule,
    FeatherIconModule
  ],
  exports: [PluginTrelloComponent]
})
export class PluginTrelloModule { }
