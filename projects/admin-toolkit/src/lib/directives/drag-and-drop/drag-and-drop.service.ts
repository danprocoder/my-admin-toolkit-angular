import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {

  private data: any;

  constructor() { }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

}
