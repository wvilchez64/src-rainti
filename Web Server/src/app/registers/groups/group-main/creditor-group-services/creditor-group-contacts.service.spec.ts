import { TestBed } from '@angular/core/testing';

import { CreditorGroupContactsService } from './creditor-group-contacts.service';

describe('CreditorGroupContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditorGroupContactsService = TestBed.get(CreditorGroupContactsService);
    expect(service).toBeTruthy();
  });
});
