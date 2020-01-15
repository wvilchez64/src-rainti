import { TestBed } from '@angular/core/testing';

import { CreditorGroupContactDetailService } from './creditor-group-contact-detail.service';

describe('CreditorGroupContactDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditorGroupContactDetailService = TestBed.get(CreditorGroupContactDetailService);
    expect(service).toBeTruthy();
  });
});
