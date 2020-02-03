import { TestBed } from '@angular/core/testing';

import { ContractAddService } from './contract-add.service';

describe('ContractAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractAddService = TestBed.get(ContractAddService);
    expect(service).toBeTruthy();
  });
});
