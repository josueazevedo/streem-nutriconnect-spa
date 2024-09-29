import { TestBed } from '@angular/core/testing';

import { PatientRepositoryService } from './patient-repository.service';

describe('PatientRepositoryService', () => {
  let service: PatientRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
