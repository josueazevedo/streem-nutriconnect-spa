import { Routes } from '@angular/router';
import { FormGuard } from '../../core/guards/form.guard';

export const PATIENT_MODULE_PATH = 'patient';

const path = {
  form: 'form',
};

export const PatientRoutes: Routes = [
  {
    path: '',
    redirectTo: path.form,
    pathMatch: 'full',
  },
  {
    path: path.form,
    canDeactivate: [FormGuard],
    data: {
      header_title: 'Prontuário',
    },
    loadComponent: () =>
      import('./pages/patient-form/patient-form.component').then(
        (m) => m.PatientFormComponent
      ),
  },
];

export const PATIENT_ROUTES = {
  form: `${PATIENT_MODULE_PATH}/${path.form}`,
};
