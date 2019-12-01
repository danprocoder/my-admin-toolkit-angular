import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavUserDropdownComponent } from './topnav-user-dropdown.component';

describe('TopnavUserDropdownComponent', () => {
  let component: TopnavUserDropdownComponent;
  let fixture: ComponentFixture<TopnavUserDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavUserDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavUserDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
