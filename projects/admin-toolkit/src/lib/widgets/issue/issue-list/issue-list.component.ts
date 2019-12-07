import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  @ViewChild('dropTargetSlot') cardsContainer: ElementRef;

  @Output() cardDropped = new EventEmitter<any>();

  showBottomDropSlot = false;

  constructor() { }

  ngOnInit() {
    this.cardDropped.subscribe(() => {
      this.showBottomDropSlot = false;
    });
  }

  onDragEnter() {
    this.showBottomDropSlot = true;
  }

  onDragLeave() {
    this.showBottomDropSlot = false;
  }

}
