import { TestBed } from '@angular/core/testing';

import { ListaReproduccionServiceService } from './lista-reproduccion-service.service';

describe('ListaReproduccionServiceService', () => {
  let service: ListaReproduccionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaReproduccionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
