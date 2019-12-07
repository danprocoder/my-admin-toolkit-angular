import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Output() paginate = new EventEmitter<any>();

  @Input() columns: any[];
  @Input() data: any[];

  @Input() pageSizes: number[] = [10, 20, 30, 40, 50];
  @Input() totalItems = 0; // --

  page = 1;
  pageSize = 10;

  constructor() { }

  ngOnInit() {
    this.paginate.emit({
      page: this.page,
      pageSize: this.pageSize
    });
  }

  paginationListener($event) {

  }

}
