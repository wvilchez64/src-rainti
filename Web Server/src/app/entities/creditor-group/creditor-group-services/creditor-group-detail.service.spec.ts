import { TestBed } from '@angular/core/testing';

import { CreditorGroupDetailService } from './creditor-group-detail.service';

describe('CreditorGroupDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditorGroupDetailService = TestBed.get(CreditorGroupDetailService);
    expect(service).toBeTruthy();
  });
});
