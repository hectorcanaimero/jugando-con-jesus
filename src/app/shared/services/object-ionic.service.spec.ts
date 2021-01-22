import { TestBed } from '@angular/core/testing';

import { ObjectIonicService } from './object-ionic.service';

describe('ObjectIonicService', () => {
  let service: ObjectIonicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectIonicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
