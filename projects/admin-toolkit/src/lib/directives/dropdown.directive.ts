import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[libDropdown]'
})
export class DropdownDirective implements OnInit {

  @Input() trigger: any;

  dropdown: any;

  @HostBinding('style.position') cssPosition = 'absolute';
  @HostBinding('style.top') cssTop = '100%';
  @HostBinding('style.right') cssRight = '0';
  @HostBinding('style.display') cssDisplay = 'none';

  constructor(private element: ElementRef) {
    this.dropdown = element.nativeElement;
  }

  ngOnInit() {
    this.trigger.addEventListener('click', ($event) => {
      this.cssDisplay = (
        this.cssDisplay !== 'none'
          ? 'none'
          : 'block'
      );
      $event.preventDefault();
    });
  }

}
