import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-card',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
