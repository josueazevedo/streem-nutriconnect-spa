import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlertComponent } from '../../../../core/components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { NavigateService } from '../../../../core/services/navigate/navigate.service';
import { AUTH_ROUTES } from '../../auth.routes';
import { errorNotify } from '../../../../core/helpers/error-notify.helper';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AlertComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  form!: FormGroup;
  alert: string = '';
  hidePassword: boolean = true;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly navigate: NavigateService
  ) {
    this.initForm();
  }

  login() {
    this.authService
      .login(this.form.get('username')?.value, this.form.get('password')?.value)
      .subscribe({
        next: (user) => {
          if (!user.active) {
            this.navigate.goTo(AUTH_ROUTES.userBlocked);
            return;
          }

          if (!user.verified) {
            this.navigate.goTo(AUTH_ROUTES.userVerify);
            return;
          }

          if (user.profiles.includes('NUTRI')) {
            this.navigate.goTo('');
            return;
          }

          this.navigate.goTo(AUTH_ROUTES.forbidden);
        },
        error: (error) => {
          errorNotify(() => {
            this.alert = error.error.message;
          }, error);
        },
      });
  }

  initForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  goToSignUp() {
    this.navigate.goTo(AUTH_ROUTES.signUp);
  }

  goToResetPass() {
    this.navigate.goTo(AUTH_ROUTES.resetPass);
  }

  showPassword() {
    this.hidePassword = !this.hidePassword;
  }
}
