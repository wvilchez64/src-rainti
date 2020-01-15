import { TestBed } from '@angular/core/testing';

import { CreditorContactsService } from './creditor-contacts.service';

describe('CreditorContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditorContactsService = TestBed.get(CreditorContactsService);
    expect(service).toBeTruthy();
  });
});
