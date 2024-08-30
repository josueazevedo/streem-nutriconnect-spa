import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlertComponent } from '../../../../shared/components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { NavigateService } from '../../../../core/services/navigate.service';
import { ROUTES } from '../../../../config/routes.config';

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
        next: () => {
          this.navigate.goTo(ROUTES.HOME);
        },
        error: (error) => {
          this.alert = error.error.message;
        },
      });
  }

  initForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
