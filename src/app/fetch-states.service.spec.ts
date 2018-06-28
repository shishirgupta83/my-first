import { TestBed, inject } from '@angular/core/testing';

import { FetchStatesService } from './fetch-states.service';

describe('FetchStatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchStatesService]
    });
  });

  it('should be created', inject([FetchStatesService], (service: FetchStatesService) => {
    expect(service).toBeTruthy();
  }));
});
