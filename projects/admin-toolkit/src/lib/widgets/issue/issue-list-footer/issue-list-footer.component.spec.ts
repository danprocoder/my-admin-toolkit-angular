import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueListFooterComponent } from './issue-list-footer.component';

describe('IssueListFooterComponent', () => {
  let component: IssueListFooterComponent;
  let fixture: ComponentFixture<IssueListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
