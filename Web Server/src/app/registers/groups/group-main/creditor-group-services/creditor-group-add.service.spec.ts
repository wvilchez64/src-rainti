import { TestBed } from '@angular/core/testing';

import { CreditorGroupAddService } from './creditor-group-add.service';

describe('CreditorGroupAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditorGroupAddService = TestBed.get(CreditorGroupAddService);
    expect(service).toBeTruthy();
  });
});
