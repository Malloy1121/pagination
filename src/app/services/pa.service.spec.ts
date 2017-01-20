/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaService } from './pa.service';

describe('PaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaService]
    });
  });

  it('should ...', inject([PaService], (service: PaService) => {
    expect(service).toBeTruthy();
  }));
});
