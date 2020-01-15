import { TestBed } from '@angular/core/testing';

import { CreditorDetailService } from './creditor-detail.service';

describe('CreditorDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditorDetailService = TestBed.get(CreditorDetailService);
    expect(service).toBeTruthy();
  });
});
