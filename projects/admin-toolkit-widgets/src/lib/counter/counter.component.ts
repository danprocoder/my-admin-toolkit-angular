import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as FeatherIcon from 'feather-icons';

@Component({
  selector: 'widget:counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, AfterViewInit {

  @Input() icon: string;
  @Input() title: string;
  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    FeatherIcon.replace();
  }

}
