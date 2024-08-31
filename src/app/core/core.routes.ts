import { Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AUTH_MODULE_PATH } from '../features/auth/auth.routes';

export const CoreRoutes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../features/dashboard/dashboard.routes').then(
            (m) => m.DashboardRoutes
          ),
      },
      {
        path: AUTH_MODULE_PATH,
        loadChildren: () =>
          import('../features/auth/auth.routes').then((m) => m.AuthRoutes),
      },
    ],
  },
];
