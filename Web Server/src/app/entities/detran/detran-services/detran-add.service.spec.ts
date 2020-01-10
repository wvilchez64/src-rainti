import { TestBed } from '@angular/core/testing';

import { DetranAddService } from './detran-add.service';

describe('DetranAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetranAddService = TestBed.get(DetranAddService);
    expect(service).toBeTruthy();
  });
});
