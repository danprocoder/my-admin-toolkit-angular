import { Directive, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { DragAndDropService } from './directives/drag-and-drop/drag-and-drop.service';

@Directive({
  selector: '[libDraggable]'
})
export class DraggableDirective implements OnInit {

  @Input() libDragData: any;

  constructor(
    private element: ElementRef,
    private service: DragAndDropService
  ) { }

  ngOnInit() {
    this.element.nativeElement.setAttribute('draggable', true);
  }

  @HostListener('dragstart', ['$event'])
  onDragStart($event) {
    setTimeout(() => {
      this.element.nativeElement.style.display = 'none';
    }, 0);

    this.service.setData({
      element: this.element,
      data: this.libDragData
    });
  }

  @HostListener('dragend', ['$event'])
  onDragEnd($event) {
    this.element.nativeElement.style.display = 'block';
  }

}
