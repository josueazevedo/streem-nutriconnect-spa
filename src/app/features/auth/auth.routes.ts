import { Routes } from '@angular/router';

export const AUTH_MODULE_PATH = 'auth';

const path = {
  signIn: 'sign-in',
  userVerify: 'user-verify',
  forbidden: 'forbidden',
  userBlocked: 'user-blocked',
};

export const AuthRoutes: Routes = [
  {
    path: '',
    redirectTo: path.signIn,
    pathMatch: 'full',
  },
  {
    path: path.signIn,
    loadComponent: () =>
      import('./pages/sign-in/sign-in.component').then(
        (m) => m.SignInComponent
      ),
  },
  {
    path: path.userVerify,
    loadComponent: () =>
      import('./pages/user-verify/user-verify.component').then(
        (m) => m.UserVerifyComponent
      ),
  },
  {
    path: path.forbidden,
    loadComponent: () =>
      import('./pages/forbidden/forbidden.component').then(
        (m) => m.ForbiddenComponent
      ),
  },
  {
    path: path.userBlocked,
    loadComponent: () =>
      import('./pages/user-blocked/user-blocked.component').then(
        (m) => m.UserBlockedComponent
      ),
  },
];

export const AUTH_ROUTES = {
  signIn: `${AUTH_MODULE_PATH}/${path.signIn}`,
  userVerify: `${AUTH_MODULE_PATH}/${path.userVerify}`,
  forbidden: `${AUTH_MODULE_PATH}/${path.forbidden}`,
  userBlocked: `${AUTH_MODULE_PATH}/${path.userBlocked}`,
};
