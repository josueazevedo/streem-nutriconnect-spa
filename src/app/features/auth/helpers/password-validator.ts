import { AbstractControl, ValidatorFn } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const senha = control.value;

    const minLength = senha?.length >= 8;

    const hasUpperCase = /[A-Z]/.test(senha);

    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

    const valid = minLength && hasUpperCase && hasSpecialChar;

    return valid ? null : { invalidPassword: true };
  };
}
