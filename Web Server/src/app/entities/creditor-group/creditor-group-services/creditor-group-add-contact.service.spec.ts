import { TestBed } from '@angular/core/testing';

import { CreditorGroupAddContactService } from './creditor-group-add-contact.service';

describe('CreditorGroupAddContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditorGroupAddContactService = TestBed.get(CreditorGroupAddContactService);
    expect(service).toBeTruthy();
  });
});
