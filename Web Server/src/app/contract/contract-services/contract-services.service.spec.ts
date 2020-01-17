import { TestBed } from '@angular/core/testing';

import { ContractServicesService } from './contract-services.service';

describe('ContractServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractServicesService = TestBed.get(ContractServicesService);
    expect(service).toBeTruthy();
  });
});
