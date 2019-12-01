import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-topnav-notification-widget',
  templateUrl: './topnav-notification.component.html',
  styleUrls: ['./topnav-notification.component.css']
})
export class TopnavNotificationComponent implements OnInit {

  @Input() data: any[];

  constructor() { }

  ngOnInit() {
  }

}
