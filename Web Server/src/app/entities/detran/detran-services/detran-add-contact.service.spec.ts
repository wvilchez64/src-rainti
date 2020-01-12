import { TestBed } from '@angular/core/testing';

import { DetranAddContactService } from './detran-add-contact.service';

describe('DetranAddContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetranAddContactService = TestBed.get(DetranAddContactService);
    expect(service).toBeTruthy();
  });
});
