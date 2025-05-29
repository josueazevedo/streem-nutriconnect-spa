import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';
import { map, Observable } from 'rxjs';
import { AUTH_ROUTES } from '../../features/auth/auth.routes';
import { NavigateService } from '../services/navigate/navigate.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const profile = inject(ProfileService);
  const router = inject(NavigateService);

  return profile.getProfile().pipe(
    map((profile) => {
      if (profile) {
        return true;
      }
      router.goTo(AUTH_ROUTES.signIn);
      return false;
    })
  );
};
