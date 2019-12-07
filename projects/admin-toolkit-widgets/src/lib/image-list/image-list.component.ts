import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  @Input() data: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
