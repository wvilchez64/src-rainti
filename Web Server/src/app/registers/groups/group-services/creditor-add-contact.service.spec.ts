import { TestBed } from '@angular/core/testing';

import { CreditorAddContactService } from './creditor-add-contact.service';

describe('CreditorAddContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditorAddContactService = TestBed.get(CreditorAddContactService);
    expect(service).toBeTruthy();
  });
});
