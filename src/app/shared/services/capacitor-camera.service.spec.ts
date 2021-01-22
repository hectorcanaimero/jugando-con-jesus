import { TestBed } from '@angular/core/testing';

import { CapacitorCameraService } from './capacitor-camera.service';

describe('CapacitorCameraService', () => {
  let service: CapacitorCameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapacitorCameraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
