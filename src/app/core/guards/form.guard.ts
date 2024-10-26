import { inject, Injectable } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { filter, map, Observable, of } from 'rxjs';
import { ConfirmDialogService } from '../services/confirm-dialog-service/confirm-dialog.service';

export interface FormComponentGuard {
  hasUnsavedChanges: () => boolean | Observable<boolean>;
}

export const FormGuard: CanDeactivateFn<FormComponentGuard> = (
  component: FormComponentGuard,
  route,
  state
): Observable<boolean> | boolean => {
  const confirmService = inject(ConfirmDialogService);
  const CONFIRM_ACTION = 'FORM_UNSAVED_CHANGES';

  if (component.hasUnsavedChanges()) {
    confirmService.showDialog(
      'Você possui alterações não salvas. Tem certeza de que deseja sair sem salvá-las?',
      CONFIRM_ACTION
    );

    return confirmService.observerConfirm().pipe(
      filter((e) => e.action_event === CONFIRM_ACTION),
      map((confirm) => confirm.status)
    );
  }

  return true;
};
