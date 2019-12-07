import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.css']
})
export class AvatarListComponent implements OnInit {

  @Input() avatars: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
