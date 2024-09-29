import { FormGroup } from '@angular/forms';

export function parseFormErrorMessage(form: FormGroup, controlName: string) {
  const control = form.get(controlName);

  if (control?.errors) {
    if (control.errors['required']) {
      return 'Este campo é obrigatório';
    }
    if (control.errors['minlength']) {
      return `O tamanho mínimo é ${control.errors['minlength'].requiredLength}`;
    }
    if (control.errors['email']) {
      return 'Email inválido';
    }
  }

  return '';
}
