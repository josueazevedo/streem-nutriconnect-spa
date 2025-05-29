import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { RecordService } from '../services/record/record.service';
import { NavigateService } from '../../../core/services/navigate/navigate.service';
import { PATIENT_ROUTES } from '../../patient/patient.routes';

export const PatientSelectGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  const record = inject(RecordService);
  const router = inject(NavigateService);

  if (record.getPatient()) {
    return true;
  }

  router.goTo(PATIENT_ROUTES.list);
  return false;
};
