import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientRepositoryService } from './../../services/patient/patient-repository.service';
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

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DynamicTableComponent,
    NewPatientDialogComponent,
    HeaderPatientComponent,
  ],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss',
})
export class PatientListComponent {
  list: Patient[] = [];
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

  constructor(
    private patientService: PatientRepositoryService,
    private nav: NavigateService
  ) {}

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    const limit = rowsPerPageDynamicTable(70);
    this.patientService
      .findAll(this.currentPage, limit, this.search)
      .subscribe((res) => {
        this.list = res.data.items;
        this.totalPages = res.data.pages;
        this.search = '';
      });
  }

  navigateToPatient(id: string) {
    console.log(this.fixedColumn, 'aqui');
    this.nav.goTo(PATIENT_ROUTES.form, { id });
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
}
