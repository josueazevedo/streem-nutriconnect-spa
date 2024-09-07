import { Routes } from '@angular/router';

export const AUTH_MODULE_PATH = 'auth';

const path = {
  signIn: 'sign-in',
  signUp: 'sign-up',
  userVerify: 'user-verify',
  forbidden: 'forbidden',
  userBlocked: 'user-blocked',
  resetPass: 'reset-pass',
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
    path: path.signUp,
    loadComponent: () =>
      import('./pages/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent
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
  {
    path: path.resetPass,
    loadComponent: () =>
      import('./pages/reset-pass/reset-pass.component').then(
        (m) => m.ResetPassComponent
      ),
  },
];

export const AUTH_ROUTES = {
  signIn: `${AUTH_MODULE_PATH}/${path.signIn}`,
  signUp: `${AUTH_MODULE_PATH}/${path.signUp}`,
  userVerify: `${AUTH_MODULE_PATH}/${path.userVerify}`,
  forbidden: `${AUTH_MODULE_PATH}/${path.forbidden}`,
  userBlocked: `${AUTH_MODULE_PATH}/${path.userBlocked}`,
  resetPass: `${AUTH_MODULE_PATH}/${path.resetPass}`,
};
