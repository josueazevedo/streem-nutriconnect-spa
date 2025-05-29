import { Routes } from '@angular/router';
import { FormGuard } from '../../core/guards/form.guard';

export const PATIENT_MODULE_PATH = 'patients';

const path = {
  list: '',
  form: 'form',
};

export const PatientRoutes: Routes = [
  {
    path: path.list,
    data: {
      header_title: 'Prontuários',
    },
    loadComponent: () =>
      import('./pages/patient-list/patient-list.component').then(
        (m) => m.PatientListComponent
      ),
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
  list: `${PATIENT_MODULE_PATH}`,
  form: `${PATIENT_MODULE_PATH}/${path.form}`,
};
