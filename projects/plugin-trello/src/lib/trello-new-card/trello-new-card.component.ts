import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


interface NewCardEvent {
  name: string;
  labels: any[];
  members: [];
  $event: any;
}

@Component({
  selector: 'lib-trello-new-card',
  templateUrl: './trello-new-card.component.html',
  styleUrls: ['./trello-new-card.component.css']
})
export class TrelloNewCardComponent implements OnInit {

  @Input() saving = false;

  @Output() cardFieldBlur = new EventEmitter<NewCardEvent>();
  @Output() addCardClick = new EventEmitter<NewCardEvent>();

  @ViewChild('cardTextField') cardField: ElementRef;

  constructor() { }

  ngOnInit() {
    this.cardField.nativeElement.focus();
  }

  getCardEvent($event): NewCardEvent {
    return {
      name: this.cardField.nativeElement.value.trim(),
      labels: [],
      members: [],
      $event,
    };
  }

}
