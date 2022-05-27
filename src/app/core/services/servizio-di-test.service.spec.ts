import { TestBed } from '@angular/core/testing';

import { ServizioDiTestService } from './servizio-di-test.service';

describe('ServizioDiTestService', () => {
  let service: ServizioDiTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizioDiTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
