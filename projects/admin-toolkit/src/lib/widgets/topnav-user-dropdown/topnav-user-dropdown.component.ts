import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-topnav-user-dropdown-widget',
  templateUrl: './topnav-user-dropdown.component.html',
  styleUrls: ['./topnav-user-dropdown.component.css']
})
export class TopnavUserDropdownComponent implements OnInit {

  @Input() imageUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
