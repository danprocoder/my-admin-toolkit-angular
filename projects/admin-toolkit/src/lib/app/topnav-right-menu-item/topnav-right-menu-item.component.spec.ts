import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavRightMenuItemComponent } from './topnav-right-menu-item.component';

describe('TopnavRightMenuItemComponent', () => {
  let component: TopnavRightMenuItemComponent;
  let fixture: ComponentFixture<TopnavRightMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavRightMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavRightMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
