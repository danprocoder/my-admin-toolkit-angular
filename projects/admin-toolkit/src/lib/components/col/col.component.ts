import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'lib-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.css']
})
export class ColComponent implements OnInit {

  @HostBinding('class') className: string;

  @Input() md: number;

  constructor() { }

  ngOnInit() {
    this.className = `md-${this.md}`;
  }

}
