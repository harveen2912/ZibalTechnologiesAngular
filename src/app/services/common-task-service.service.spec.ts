import { TestBed } from '@angular/core/testing';

import { CommonTaskServiceService } from './common-task-service.service';

describe('CommonTaskServiceService', () => {
  let service: CommonTaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonTaskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
