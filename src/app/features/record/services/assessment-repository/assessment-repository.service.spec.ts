import { TestBed } from '@angular/core/testing';

import { AssessmentRepositoryService } from './assessment-repository.service';

describe('AssessmentRepositoryService', () => {
  let service: AssessmentRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
