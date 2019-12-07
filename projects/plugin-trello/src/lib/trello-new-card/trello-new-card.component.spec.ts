import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloNewCardComponent } from './trello-new-card.component';

describe('TrelloNewCardComponent', () => {
  let component: TrelloNewCardComponent;
  let fixture: ComponentFixture<TrelloNewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloNewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
