import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminToolkitModule } from 'admin-toolkit';
import { CounterComponent } from './counter/counter.component';
import { ImageListComponent } from './image-list/image-list.component';

@NgModule({
  declarations: [
    CounterComponent,
    ImageListComponent
  ],
  imports: [
    CommonModule,
    AdminToolkitModule
  ],
  exports: [
    CounterComponent,
    ImageListComponent
  ]
})
export class AdminToolkitWidgetsModule { }
