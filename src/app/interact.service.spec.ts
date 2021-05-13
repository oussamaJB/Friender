import { TestBed } from '@angular/core/testing';

import { InteractService } from './interact.service';

describe('InteractService', () => {
  let service: InteractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
