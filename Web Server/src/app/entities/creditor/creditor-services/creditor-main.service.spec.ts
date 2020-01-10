import { TestBed } from '@angular/core/testing';

import { CreditorMainService } from './creditor-main.service';

describe('CreditorMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditorMainService = TestBed.get(CreditorMainService);
    expect(service).toBeTruthy();
  });
});
