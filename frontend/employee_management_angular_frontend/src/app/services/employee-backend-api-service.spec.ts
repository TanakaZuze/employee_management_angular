import { TestBed } from '@angular/core/testing';

import { EmployeeBackendApiService } from './employee-backend-api-service';

describe('EmployeeBackendApiService', () => {
  let service: EmployeeBackendApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeBackendApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
