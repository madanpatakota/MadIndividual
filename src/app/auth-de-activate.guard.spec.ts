import { TestBed } from '@angular/core/testing';

import { AuthDeActivateGuard } from './auth-de-activate.guard';

describe('AuthDeActivateGuard', () => {
  let guard: AuthDeActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthDeActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
