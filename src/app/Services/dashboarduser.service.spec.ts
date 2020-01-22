import { TestBed } from '@angular/core/testing';

import { DashboarduserService } from './dashboarduser.service';

describe('DashboarduserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboarduserService = TestBed.get(DashboarduserService);
    expect(service).toBeTruthy();
  });
});
