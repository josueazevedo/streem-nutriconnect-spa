import { Routes } from '@angular/router';

export const RECORD_MODULE_PATH = 'record';

const path = {
  list: '',
  evolution: 'evolution',
  assessment: 'assessment',
};

export const RecordRoutes: Routes = [
  {
    path: path.assessment,
    data: {
      header_title: 'Prontuários',
    },
    loadComponent: () =>
      import('./pages/record-assessment/record-assessment.component').then(
        (m) => m.RecordAssessmentComponent
      ),
  },
  {
    path: path.evolution,
    data: {
      header_title: 'Prontuários',
    },
    loadComponent: () =>
      import('./pages/record-evolution/record-evolution.component').then(
        (m) => m.RecordEvolutionComponent
      ),
  },
];

export const RECORD_ROUTES = {
  list: `${RECORD_MODULE_PATH}`,
  assessment: `${RECORD_MODULE_PATH}/${path.assessment}`,
  evolution: `${RECORD_MODULE_PATH}/${path.evolution}`,
};
