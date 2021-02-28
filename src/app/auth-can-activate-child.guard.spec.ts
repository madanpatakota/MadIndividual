import { TestBed } from '@angular/core/testing';

import { AuthCanActivateChildGuard } from './auth-can-activate-child.guard';

describe('AuthCanActivateChildGuard', () => {
  let guard: AuthCanActivateChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCanActivateChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
