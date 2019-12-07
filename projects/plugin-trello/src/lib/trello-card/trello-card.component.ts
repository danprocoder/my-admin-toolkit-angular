import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as helpers from '../utils/helpers';
import { PluginTrelloService } from '../plugin-trello.service';

@Component({
  selector: 'lib-trello-card',
  templateUrl: './trello-card.component.html',
  styleUrls: ['./trello-card.component.css']
})
export class TrelloCardComponent implements OnInit {

  @Input() card: any;

  constructor(private trello: PluginTrelloService) { }

  ngOnInit() {}

  getMembersAvatars(members: any): any[] {
    return helpers.getMembersAvatars(members);
  }

  deleteCard($event, card) {
    $event.preventDefault();

    this.trello.deleteCard(card.id)
      .subscribe(() => {
        this.trello.$cardAction.next({ action: 'delete', card });
      });
  }

}
