import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueListHeaderComponent } from './issue-list-header.component';

describe('IssueListHeaderComponent', () => {
  let component: IssueListHeaderComponent;
  let fixture: ComponentFixture<IssueListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
