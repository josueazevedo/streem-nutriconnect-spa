import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxMaskDirective } from 'ngx-mask';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { SearchCepService } from '../../../../shared/services/search-cep/search-cep.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownComponent } from '../../../../shared/design-system/dropdown/dropdown.component';
import { Patient } from '../../models/patient.model';
import { DatepickerComponent } from '../../../../shared/design-system/datepicker/datepicker.component';
import { AlertComponent } from '../../../../core/components/alert/alert.component';
import { parseFormErrorMessage } from '../../../../shared/helpers/form-error-message.helper';
import { PatientRepositoryService } from '../../services/patient/patient-repository.service';
import { errorNotify } from '../../../../core/helpers/error-notify.helper';
import { parseToFormData } from '../../../../shared/helpers/parse-formdata.helper';
import { FormComponentGuard } from '../../../../core/guards/form.guard';
import { Observable } from 'rxjs';
import { NavigateService } from '../../../../core/services/navigate/navigate.service';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [
    CommonModule,
    DropdownComponent,
    DatepickerComponent,
    NgxMaskDirective,
    ReactiveFormsModule,
    AlertComponent,
  ],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.scss',
})
export class PatientFormComponent implements FormComponentGuard {
  hideMenu: boolean = true;
  form!: FormGroup;
  sexOptons = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' },
    { label: 'Outro', value: 'O' },
  ];
  imageUrl: string | ArrayBuffer | null = null;
  file?: File;

  constructor(
    private notify: NotificationService,
    private cepSearc: SearchCepService,
    private fb: FormBuilder,
    private patientRepo: PatientRepositoryService,
    private nav: NavigateService
  ) {
    this.initForm();
  }

  save(): void {
    this.nav.goTo('/auth/sign-in');
    // if (this.form.invalid) {
    //   this.form.markAllAsTouched();
    //   this.notify.addNotification(
    //     'warning',
    //     'Preencha todos os campos obrigatórios'
    //   );
    //   return;
    // }

    // const formData = parseToFormData(this.form.value);
    // if (this.file) {
    //   formData.append('file', this.file);
    // }

    // if (this.form.get('id')) {
    //   this.update(formData, this.form.get('id')?.value);
    //   return;
    // }

    // this.create(formData);
  }

  create(patient: FormData) {
    this.patientRepo.create(patient).subscribe({
      next: (patient) => {
        this.notify.addNotification('success', 'Criado com sucesso');
        this.initForm(patient.data);
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

  update(patient: FormData, id: string) {
    this.patientRepo.update(patient, id).subscribe({
      next: (patient) => {
        this.notify.addNotification('success', 'Atualizado com sucesso');
        this.initForm(patient.data);
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

  initForm(patient?: Patient): void {
    this.form = this.fb.group({
      id: [patient?.id || ''],
      name: [patient?.name || '', [Validators.required]],
      email: [patient?.email || '', [Validators.email]],
      phoneNumber: [patient?.phoneNumber || ''],
      dateOfBirth: [patient?.dateOfBirth || '', [Validators.required]],
      gender: [patient?.gender || '', [Validators.required]],
      street: [patient?.street || ''],
      number: [patient?.number || ''],
      complement: [patient?.complement || ''],
      neighborhood: [patient?.neighborhood || ''],
      city: [patient?.city || ''],
      state: [patient?.state || ''],
      zipCode: [patient?.zipCode || ''],
      photo: [patient?.photo || ''],
      status: [patient?.status || true],
      createdAt: [patient?.createdAt || ''],
      updatedAt: [patient?.updatedAt || '10.'],
    });
  }

  findZipCode(): void {
    const zipCode = this.form.get('zipCode')?.value;
    if (zipCode && zipCode.length === 8) {
      this.cepSearc.find(zipCode).subscribe({
        next: (data) => {
          this.form.patchValue({
            street: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf,
            complement: data.complemento,
          });
        },
        error: (error) => {
          this.notify.addNotification('warning', 'Cep não encontrado');
        },
      });
    }
  }

  toggleMenu(): void {
    this.hideMenu = !this.hideMenu;
    if (this.hideMenu) {
      document.body.classList.remove('overflow-hidden');
    } else {
      document.body.classList.add('overflow-hidden');
    }
  }

  getErrorMessage(controlName: string): string {
    return parseFormErrorMessage(this.form, controlName);
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
    if (this.file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };

      reader.readAsDataURL(this.file);
    }
  }

  removeFile() {
    this.file = undefined;
    this.imageUrl = null;
  }

  hasUnsavedChanges = () => {
    return this.form.dirty || this.imageUrl != null;
  };
}
