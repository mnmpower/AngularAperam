import { TestBed } from '@angular/core/testing';

import { PlaatsService } from './plaats.service';

describe('PlaatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaatsService = TestBed.get(PlaatsService);
    expect(service).toBeTruthy();
  });
});
