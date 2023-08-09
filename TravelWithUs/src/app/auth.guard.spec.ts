import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { authGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: authGuard; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        authGuard,
        { provide: Router, useClass: RouterStub }, 
        ToastrService 
      ]
    });

    guard = TestBed.inject(authGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  // You can add more tests for canActivateChild here
});

class RouterStub {
  navigateByUrl(url: string) {
    return url;
  }
}
