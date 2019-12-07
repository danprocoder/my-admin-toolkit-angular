import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import * as Icons from 'angular-feather/icons';
//{ AlignLeft, Bell, BellOff, MoreHorizontal, Tag, Plus, User, UserPlus }
// const icons = { AlignLeft, Bell, BellOff, MoreHorizontal, Tag, Plus, User, UserPlus };

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(Icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class FeatherIconModule { }
