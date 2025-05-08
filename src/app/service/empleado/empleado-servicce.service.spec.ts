import { TestBed } from '@angular/core/testing';

import { EmpleadoServicceService } from './empleado-servicce.service';

describe('EmpleadoServicceService', () => {
  let service: EmpleadoServicceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoServicceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
