import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueListHeaderTextComponent } from './issue-list-header-text.component';

describe('IssueListHeaderTextComponent', () => {
  let component: IssueListHeaderTextComponent;
  let fixture: ComponentFixture<IssueListHeaderTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueListHeaderTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListHeaderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
