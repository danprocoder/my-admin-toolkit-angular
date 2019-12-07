import { Directive, HostListener, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { DragAndDropService } from './drag-and-drop.service';

@Directive({
  selector: '[libDropTarget]'
})
export class DropTargetDirective {

  @Output() libOnDrop = new EventEmitter<any>();

  @Output() libOnDragEnter = new EventEmitter<any>();
  @Output() libOnDragLeave = new EventEmitter<any>();

  @Input() libDropTargetSlot: any;

  dragEnterLeaveCounter = 0;

  constructor(
    private target: ElementRef,
    private service: DragAndDropService
  ) { }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
  }

  @HostListener('drop')
  dropListener() {
    const { data, element } =  this.service.getData();

    // if (this.libDropTargetSlot) {
    //   this.libDropTargetSlot.appendChild(element.nativeElement);
    // } else {
    //   this.target.nativeElement.appendChild(element.nativeElement);
    // }

    this.libOnDrop.emit({ data, element });

    this.dragEnterLeaveCounter = 0;
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter($event) {
    $event.stopPropagation();

    this.dragEnterLeaveCounter++;

    this.libOnDragEnter.emit();
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    $event.stopPropagation();

    this.dragEnterLeaveCounter--;

    if (this.dragEnterLeaveCounter === 0) {
      this.libOnDragLeave.emit();
    }
  }

}
