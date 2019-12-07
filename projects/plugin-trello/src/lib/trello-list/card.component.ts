import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PluginTrelloService } from '../plugin-trello.service';

interface TrelloCard {
  id: string;
  name: string;
  labels: any[];
  members?: any[];
}

@Component({
  selector: 'trello-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() listId: string;
  @Input() name: string;

  @ViewChild('cardsContainer') cardsContainer: ElementRef;

  cards: TrelloCard[] = [];

  newCardMode = false;
  newCardSaving = false;

  constructor(private trello: PluginTrelloService) { }

  ngOnInit() {
    this.trello.$cardAction.subscribe((data: any) => {
      if (data.action === 'move' && data.prevListId === this.listId) {
        this.removeCard(data.card.id);
      }

      if (data.action === 'delete' && data.card.idList === this.listId) {
        this.removeCard(data.card.id);
      }
    });

    this.trello.getListCards(this.listId)
      .subscribe((cards: TrelloCard[]) => {
        this.cards = cards;
      });
  }

  removeCard(cardId) {
    this.cards = this.cards.filter(item => item.id !== cardId);
  }

  newCardButtonListener($event): void {
    this.newCardMode = true;

    $event.preventDefault();
  }

  saveNewCard($event) {
    if (!$event.name) {
      return;
    }

    this.newCardSaving = true;

    this.trello.addCardToList(this.listId, $event.name)
      .subscribe((cardData: TrelloCard) => {
        this.cards.push(cardData);

        this.newCardSaving = false;
        this.newCardMode = false;
      });
  }

  onCardDropped($event) {
    const { data } = $event;

    this.trello.$cardAction.next({
      action: 'move',
      card: data,
      prevListId: data.idList,
    });

    this.cards.push({ ...data, idList: this.listId });

    this.trello.editCard(data.id, {
      idList: this.listId
    }).subscribe(response => {
    });
  }

}
