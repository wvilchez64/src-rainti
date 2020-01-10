import { TestBed } from '@angular/core/testing';

import { DetranMainService } from './detran-main.service';

describe('DetranMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetranMainService = TestBed.get(DetranMainService);
    expect(service).toBeTruthy();
  });
});
