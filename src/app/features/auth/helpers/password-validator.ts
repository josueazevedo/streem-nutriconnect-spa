import { AbstractControl, ValidatorFn } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.value;

    const errors: string[] = [];

    password?.length < 8 && errors.push('Ter pelo menos 8 caracteres');

    !/\d/.test(password) && errors.push('Incluir ao menos 1 número');

    !/[A-Z]/.test(password) &&
      errors.push('Incluir ao menos 1 letra maiúscula');

    !/[!@#$%^&*(),.?":{}|<>]/.test(password) &&
      errors.push('Conter pelo menos 1 caractere especial (ex: @, #, $)');

    return errors.length === 0 ? null : { invalidPassword: errors };
  };
}
