import { Routes } from '@angular/router';
import { FormGuard } from '../../core/guards/form.guard';

export const PUBLIC_MODULE_PATH = 'public';

const path = {
  pre_consultation: 'pre-consulta/:id',
};

export const PublicRoutes: Routes = [
  {
    path: path.pre_consultation,
    loadComponent: () =>
      import('./pages/pre-consultation/pre-consultation.component').then(
        (m) => m.PreConsultationComponent
      ),
  },
  // {
  //   path: path.form,
  //   canDeactivate: [FormGuard],
  //   data: {
  //     header_title: 'Prontuário',
  //   },
  //   loadComponent: () =>
  //     import('./pages/patient-form/patient-form.component').then(
  //       (m) => m.PatientFormComponent
  //     ),
  // },
];

export const PUBLIC_ROUTES = {
  pre_consultation: `${PUBLIC_MODULE_PATH}`,
};
