import { Component, OnInit, Input } from '@angular/core';
import { PluginTrelloService } from '../plugin-trello.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import * as helpers from '../utils/helpers';

@Component({
  selector: 'lib-board-lists',
  templateUrl: './board-lists.component.html',
  styleUrls: ['./board-lists.component.css']
})
export class BoardListsComponent implements OnInit {

  board: any;
  lists: any[] = [];

  constructor(private trello: PluginTrelloService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    forkJoin(
      this.trello.getBoardLists(id),
      this.trello.getBoardById(id)
    )
      .subscribe(([lists, board]) => {
        console.log(board);
        this.board = board;
        this.lists = lists;
      });
  }

  getMembersAvatars(members: any) {
    return helpers.getMembersAvatars(members);
  }

}
