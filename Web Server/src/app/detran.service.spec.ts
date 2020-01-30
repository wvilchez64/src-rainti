import { TestBed } from '@angular/core/testing';

import { DetranService } from './detran.service';

describe('DetranService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetranService = TestBed.get(DetranService);
    expect(service).toBeTruthy();
  });
});
