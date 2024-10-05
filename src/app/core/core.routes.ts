import { Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AUTH_MODULE_PATH } from '../features/auth/auth.routes';
import { AuthGuard } from './guards/auth.guard';
import { VerifiedGuard } from './guards/verified.guard';
import { ActivedGuard } from './guards/actived.guard';
import { PATIENT_MODULE_PATH } from '../features/patient/patient.routes';

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
        canActivate: [AuthGuard, ActivedGuard, VerifiedGuard],
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
      {
        path: PATIENT_MODULE_PATH,
        // canActivate: [AuthGuard, ActivedGuard, VerifiedGuard],
        loadChildren: () =>
          import('../features/patient/patient.routes').then(
            (m) => m.PatientRoutes
          ),
      },
    ],
  },
];
