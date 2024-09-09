import { Routes } from '@angular/router';
import { RulesGuard } from '../../core/guards/rules.guard';

export const DashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'resume',
    pathMatch: 'full',
  },
  {
    path: 'resume',
    data: {
      title: 'Resume',
      rules: ['NUTRI'],
    },
    canActivate: [RulesGuard],
    loadComponent: () =>
      import('./pages/resume/resume.component').then((m) => m.ResumeComponent),
  },
];
