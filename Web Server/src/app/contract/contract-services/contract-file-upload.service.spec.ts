import { TestBed } from '@angular/core/testing';

import { ContractFileUploadService } from './contract-file-upload.service';

describe('ContractFileUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractFileUploadService = TestBed.get(ContractFileUploadService);
    expect(service).toBeTruthy();
  });
});
