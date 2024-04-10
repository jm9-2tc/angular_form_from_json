import { TestBed } from '@angular/core/testing';

import { FormJsonService } from './form-json.service';

describe('FormJsonServiceService', () => {
  let service: FormJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
