import {
  Component,
  OnInit,
  OnChanges,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

interface PaginationEvent {
  page: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Output() paginate = new EventEmitter<PaginationEvent>();

  @Input() total = 0;
  @Input() pageSize = 0;

  page = 1;
  lastPage = 1;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.total === 0) {
      this.lastPage = 1;
    } else {
      this.lastPage = (this.total / this.pageSize)
        + (this.total % this.pageSize > 0 ? 1 : 0);
    }
  }

  onPageSelect(event) {
    this.page = +event.target.value;
    this.emitEvent();
  }

  goToPrevPage() {
    this.page--;
    this.emitEvent();
  }

  goToNextPage() {
    this.page++;
    this.emitEvent();
  }

  goToFirstPage() {
    this.page = 1;
    this.emitEvent();
  }

  goToLastPage() {
    this.page = this.lastPage;
    this.emitEvent();
  }

  canGoToPrev() {
    return this.page > 1;
  }

  canGoToNext() {
    return this.page < this.lastPage;
  }

  emitEvent() {
    this.paginate.emit({
      page: this.page
    });
  }

  getPages() {
    const pages = [];
    for (let i = 1; i <= this.lastPage; i++) {
      pages.push(i);
    }
    return pages;
  }

}
