import { TestBed } from '@angular/core/testing';

import { WagtailService } from './wagtail.service';

describe('WagtailService', () => {
  let service: WagtailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WagtailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
