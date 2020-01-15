import { TestBed } from '@angular/core/testing';

import { GroupMainService } from './group-main.service';

describe('GroupMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupMainService = TestBed.get(GroupMainService);
    expect(service).toBeTruthy();
  });
});
