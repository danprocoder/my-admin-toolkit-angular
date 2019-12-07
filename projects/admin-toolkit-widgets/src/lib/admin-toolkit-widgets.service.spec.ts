import { TestBed } from '@angular/core/testing';

import { AdminToolkitWidgetsService } from './admin-toolkit-widgets.service';

describe('AdminToolkitWidgetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminToolkitWidgetsService = TestBed.get(AdminToolkitWidgetsService);
    expect(service).toBeTruthy();
  });
});
