import { TestBed } from '@angular/core/testing';

import { ObjectHandleService } from './object-handle.service';

describe('ObjectHandleService', () => {
  let service: ObjectHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
