import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavNotificationComponent } from './topnav-notification.component';

describe('TopnavNotificationComponent', () => {
  let component: TopnavNotificationComponent;
  let fixture: ComponentFixture<TopnavNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
