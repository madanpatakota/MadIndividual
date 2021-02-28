import { TestBed } from '@angular/core/testing';

import { AuthCanDeactivateGuard } from './auth-can-deactivate.guard';

describe('AuthCanDeactivateGuard', () => {
  let guard: AuthCanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
