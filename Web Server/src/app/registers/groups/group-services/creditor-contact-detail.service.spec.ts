import { TestBed } from '@angular/core/testing';

import { CreditorContactDetailService } from './creditor-contact-detail.service';

describe('CreditorContactDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditorContactDetailService = TestBed.get(CreditorContactDetailService);
    expect(service).toBeTruthy();
  });
});
