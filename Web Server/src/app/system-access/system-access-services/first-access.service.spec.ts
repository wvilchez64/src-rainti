import { TestBed } from '@angular/core/testing';

import { FirstAccessService } from './first-access.service';

describe('FirstAccessServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstAccessService = TestBed.get(FirstAccessService);
    expect(service).toBeTruthy();
  });
});
