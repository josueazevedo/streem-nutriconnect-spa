import { TestBed } from '@angular/core/testing';

import { PublicRepositoryService } from './public-repository.service';

describe('PublicRepositoryService', () => {
  let service: PublicRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
