import { TestBed } from '@angular/core/testing';

import { DetranContactDetailService } from './detran-contact-detail.service';

describe('DetranContactDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetranContactDetailService = TestBed.get(DetranContactDetailService);
    expect(service).toBeTruthy();
  });
});
