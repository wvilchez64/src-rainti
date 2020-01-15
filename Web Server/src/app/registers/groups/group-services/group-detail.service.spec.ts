import { TestBed } from '@angular/core/testing';

import { GroupDetailService } from './group-detail.service';

describe('GroupDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupDetailService = TestBed.get(GroupDetailService);
    expect(service).toBeTruthy();
  });
});
