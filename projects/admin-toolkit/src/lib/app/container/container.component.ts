import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'lib-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    Feather.replace();
  }

}
