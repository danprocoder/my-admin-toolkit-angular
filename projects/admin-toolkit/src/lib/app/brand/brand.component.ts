import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
