import { TestBed } from '@angular/core/testing';

import { GroupAddService } from './group-add.service';

describe('GroupAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupAddService = TestBed.get(GroupAddService);
    expect(service).toBeTruthy();
  });
});
