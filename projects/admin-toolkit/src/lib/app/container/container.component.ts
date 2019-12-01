import { Component, AfterViewInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'lib-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    Feather.replace();
  }

}
