import { AUTH_ROUTES } from './../../../auth/auth.routes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { AlertComponent } from '../../../../core/components/alert/alert.component';
import { NavigateService } from '../../../../core/services/navigate/navigate.service';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { DatepickerComponent } from '../../../../core/design-system/datepicker/datepicker.component';
import { DropdownComponent } from '../../../../core/design-system/dropdown/dropdown.component';
import { PublicRepositoryService } from '../../service/public-repository/public-repository.service';
import { parseFormErrorMessage } from '../../../../core/helpers/form-error-message.helper';
import { errorNotify } from '../../../../core/helpers/error-notify.helper';
import { PreventSpacesDirective } from '../../../../core/directives/preventSpaces/prevent-spaces.directive';
import { CapitalizeDirective } from '../../../../core/directives/captalize/capitalize.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pre-consultation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    AlertComponent,
    DropdownComponent,
    DatepickerComponent,
    CapitalizeDirective,
    PreventSpacesDirective,
  ],
  templateUrl: './pre-consultation.component.html',
  styleUrl: './pre-consultation.component.scss',
})
export class PreConsultationComponent {
  private formId: string = '';
  form!: FormGroup;
  alert: string = '';
  sexOptons = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' },
    { label: 'Outro', value: 'O' },
  ];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly navigate: NavigateService,
    private readonly notify: NotificationService,
    private readonly repo: PublicRepositoryService,
    private route: ActivatedRoute
  ) {
    this.initForm();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.navigate.goTo(AUTH_ROUTES.forbidden);
      return;
    }
    this.formId = id!;
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email]],
      phone_number: [null, [Validators.required]],
      date_of_birth: [null, [Validators.required]],
      gender: [null, [Validators.required]],
    });
  }

  create(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.notify.addNotification(
        'warning',
        'Preencha todos os campos obrigatórios'
      );
      return;
    }
    this.repo.preConsultation(this.form.value, this.formId).subscribe({
      next: () => {
        this.notify.addNotification('success', 'Criado com sucesso');
      },
      error: (error) => {
        errorNotify(() => {
          this.notify.addNotification(
            'warning',
            'Verifique as informações digitadas'
          );
        }, error);
      },
    });
  }

  getErrorMessage(controlName: string): string {
    return parseFormErrorMessage(this.form, controlName);
  }
}
