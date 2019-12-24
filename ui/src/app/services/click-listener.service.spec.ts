import { TestBed } from '@angular/core/testing';

import { ClickListenerService } from './click-listener.service';

describe('ClickListenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickListenerService = TestBed.get(ClickListenerService);
    expect(service).toBeTruthy();
  });
});
