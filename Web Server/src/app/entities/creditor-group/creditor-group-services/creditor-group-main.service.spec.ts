import { TestBed } from '@angular/core/testing';

import { CreditorGroupMainService } from './creditor-group-main.service';

describe('CreditorGroupMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditorGroupMainService = TestBed.get(CreditorGroupMainService);
    expect(service).toBeTruthy();
  });
});
