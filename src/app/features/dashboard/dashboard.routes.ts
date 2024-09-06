import { Routes } from '@angular/router';

export const DashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'resume',
    pathMatch: 'full',
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./pages/resume/resume.component').then((m) => m.ResumeComponent),
  },
];
