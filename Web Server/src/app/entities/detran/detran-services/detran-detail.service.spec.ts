import { TestBed } from '@angular/core/testing';

import { DetranDetailService } from './detran-detail.service';

describe('DetranDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetranDetailService = TestBed.get(DetranDetailService);
    expect(service).toBeTruthy();
  });
});
