import { AbstractControl, ValidatorFn } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.value;

    const minLength = password?.length >= 8;

    const hasUpperCase = /[A-Z]/.test(password);

    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const valid = minLength && hasUpperCase && hasSpecialChar;

    return valid ? null : { invalidPassword: true };
  };
}
