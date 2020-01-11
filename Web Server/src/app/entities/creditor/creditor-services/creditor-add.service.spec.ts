import { TestBed } from '@angular/core/testing';

import { CreditorAddService } from './creditor-add.service';

describe('CreditorAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditorAddService = TestBed.get(CreditorAddService);
    expect(service).toBeTruthy();
  });
});
