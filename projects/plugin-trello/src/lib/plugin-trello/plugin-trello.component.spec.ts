import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginTrelloComponent } from './plugin-trello.component';

describe('PluginTrelloComponent', () => {
  let component: PluginTrelloComponent;
  let fixture: ComponentFixture<PluginTrelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginTrelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginTrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
