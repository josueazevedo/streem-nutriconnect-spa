import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { AUTH_ROUTES } from '../../auth.routes';
import { AuthService, CreateUserData } from '../../services/auth.service';
import { NavigateService } from '../../../../core/services/navigate/navigate.service';
import { CommonModule } from '@angular/common';
import { passwordMatchValidator } from '../../helpers/password-compare';
import { AlertComponent } from '../../../../core/components/alert/alert.component';
import { PasswordValidator } from '../../helpers/password-validator';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { errorNotify } from '../../../../core/helpers/error-notify.helper';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    AlertComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  form!: FormGroup;
  alert: string = '';
  hidePassword: boolean = true;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly navigate: NavigateService,
    private readonly notify: NotificationService
  ) {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.minLength(9)]],
        email: [''],
        username: ['', [Validators.required]],
        password: ['', [Validators.required, PasswordValidator()]],
        confirme: ['', [Validators.required]],
        terms: [true, [Validators.required]],
      },
      {
        validator: passwordMatchValidator,
      }
    );
  }

  goToSignIp() {
    this.navigate.goTo(AUTH_ROUTES.signIn);
  }

  registre() {
    const data: CreateUserData = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      email: this.form.value.username,
      username: this.form.value.username,
      password: this.form.value.password,
      confirme: this.form.value.confirme,
      terms: this.form.value.terms,
    };
    this.authService.registre(data).subscribe({
      next: () => {
        this.notify.addNotification(
          'success',
          'Usuário registrado com sucesso!'
        );
        this.navigate.goTo(AUTH_ROUTES.signIn);
      },
      error: (error) => {
        errorNotify(() => {
          this.alert = error.error.message;
        }, error);
      },
    });
  }

  showPassword() {
    this.hidePassword = !this.hidePassword;
  }
}
