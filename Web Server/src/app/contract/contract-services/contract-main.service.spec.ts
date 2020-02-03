import { TestBed } from '@angular/core/testing';

import { ContractMainService } from './contract-main.service';

describe('ContractMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractMainService = TestBed.get(ContractMainService);
    expect(service).toBeTruthy();
  });
});
