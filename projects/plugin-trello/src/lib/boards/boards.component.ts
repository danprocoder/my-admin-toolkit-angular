import { Component, OnInit } from '@angular/core';
import { PluginTrelloService } from '../plugin-trello.service';

@Component({
  selector: 'lib-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  boards: any[] = [];

  constructor(private trello: PluginTrelloService) { }

  ngOnInit() {
    this.trello.getBoards()
      .subscribe(response => {
        console.log(response);
        this.boards = response;
      });
  }

}
