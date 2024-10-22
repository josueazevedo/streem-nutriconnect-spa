import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientRepositoryService } from '../../services/patient-repository/patient-repository.service';
import { Component } from '@angular/core';
import {
  DynamicTableColumn,
  DynamicTableComponent,
  rowsPerPageDynamicTable,
} from '../../../../core/design-system/dynamic-table/dynamic-table.component';
import { Patient } from '../../models/patient.model';
import { NavigateService } from '../../../../core/services/navigate/navigate.service';
import { PATIENT_ROUTES } from '../../patient.routes';
import { NewPatientDialogComponent } from '../../components/new-patient-dialog/new-patient-dialog.component';
import { HeaderPatientComponent } from '../../components/header-patient/header-patient.component';
import { PatientService } from '../../services/patient/patient.service';
import { errorNotify } from '../../../../core/helpers/error-notify.helper';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ExternalPatientDialogComponent } from '../../components/external-patient-dialog/external-patient-dialog.component';
import { PatientActionDialogComponent } from '../../components/patient-action-dialog/patient-action-dialog.component';
import { RECORD_ROUTES } from '../../../record/record.routes';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DynamicTableComponent,
    NewPatientDialogComponent,
    HeaderPatientComponent,
    ExternalPatientDialogComponent,
    PatientActionDialogComponent,
  ],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss',
})
export class PatientListComponent {
  list: Patient[] = [];
  selectedPatient: Patient | null = null;
  fixedColumn = 'name';
  columns: DynamicTableColumn[] = [
    {
      property: 'name',
      name: 'Nome',
    },
    {
      property: 'phone',
      name: 'Telefone',
    },
  ];
  currentPage = 1;
  totalPages = 0;
  search: string = '';
  showDialog = false;
  showExternalDialog = false;
  formId: string = '';
  showActionDialog = false;

  constructor(
    private patientRepository: PatientRepositoryService,
    private patientService: PatientService,
    private nav: NavigateService,
    private notify: NotificationService
  ) {}

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    const limit = rowsPerPageDynamicTable(70);
    this.patientRepository
      .findAll(this.currentPage, limit, this.search)
      .subscribe((res) => {
        this.list = res.data.items;
        this.totalPages = res.data.pages;
        this.search = '';
        //temp
        this.selectedPatient = this.list[0];
        // this.navigateToRecord();
      });
  }

  handleSelect(id: string) {
    const patient = this.list.find((patient) => patient.id === id) || null;
    this.selectedPatient = patient;
    this.showActionDialog = true;
  }

  navigateToPatient() {
    this.nav.goTo(PATIENT_ROUTES.form, { id: this.selectedPatient?.id });
  }

  navigateToRecord() {
    this.nav.goTo(RECORD_ROUTES.assessment, { id: this.selectedPatient?.id });
  }

  handlePageChange(page: number) {
    this.currentPage = page;
    this.getPatients();
  }

  handleSearch() {
    this.currentPage = 1;
    this.getPatients();
  }

  openNewPatientDialog() {
    this.showDialog = true;
  }

  navigateToNewPatient() {
    this.nav.goTo(PATIENT_ROUTES.form);
  }

  createExternalForm() {
    this.patientService.createExternalForm().subscribe({
      next: (res) => {
        this.showDialog = false;
        this.formId = res.data;
        this.showExternalDialog = true;
      },
      error: (error: HttpErrorResponse) => {
        errorNotify(() => {
          this.notify.addNotification('warning', error.error.message);
        }, error);
      },
    });
  }
}
