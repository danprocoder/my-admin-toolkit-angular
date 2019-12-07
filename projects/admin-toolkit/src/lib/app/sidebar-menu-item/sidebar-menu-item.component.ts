import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.css']
})
export class SidebarMenuItemComponent implements OnInit {

  @Input() url: string;
  @Input() children: any[];
  @Input() icon: string;

  constructor() { }

  ngOnInit() {}

}
