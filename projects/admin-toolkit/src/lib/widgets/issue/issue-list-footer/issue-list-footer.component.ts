import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-issue-list-footer',
  template: '<ng-content></ng-content>',
  styleUrls: ['./issue-list-footer.component.css']
})
export class IssueListFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
