import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-issue-list-card',
  template: '<ng-content></ng-content>',
  styleUrls: ['./issue-list-card.component.css']
})
export class IssueListCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
