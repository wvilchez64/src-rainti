import { TestBed } from '@angular/core/testing';

import { DetranContactsService } from './detran-contacts.service';

describe('DetranContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetranContactsService = TestBed.get(DetranContactsService);
    expect(service).toBeTruthy();
  });
});
