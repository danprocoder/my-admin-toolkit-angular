import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[libScrollTo]'
})
export class ScrollToDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.scrollIntoView();
  }

}
