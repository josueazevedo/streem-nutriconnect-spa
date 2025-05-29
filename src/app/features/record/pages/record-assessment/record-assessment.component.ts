import { Location, CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderRecordComponent } from '../../components/header-record/header-record.component';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  NgApexchartsModule,
  ApexStroke,
  ApexDataLabels,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexLegend,
  ApexTooltip,
} from 'ng-apexcharts';
import { AssessmentDialogComponent } from '../../components/assessment-dialog/assessment-dialog.component';
import {
  AssessmentHistory,
  AssessmentRepositoryService,
  AssessmentResponse,
} from '../../services/assessment-repository/assessment-repository.service';
import { Assessment } from '../../models/assessment.model';
import { errorNotify } from '../../../../core/helpers/error-notify.helper';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { ConfirmDialogService } from '../../../../core/services/confirm-dialog-service/confirm-dialog.service';
import { Subscription } from 'rxjs';
import { RecordPageMenuComponent } from '../../components/record-page-menu/record-page-menu.component';
import { RecordService } from '../../services/record/record.service';
import {
  DynamicTableColumn,
  DynamicTableComponent,
} from '../../../../core/design-system/dynamic-table/dynamic-table.component';
import { AlertComponent } from '../../../../core/components/alert/alert.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-record-assessment',
  standalone: true,
  imports: [
    CommonModule,
    HeaderRecordComponent,
    NgApexchartsModule,
    AssessmentDialogComponent,
    RecordPageMenuComponent,
    DynamicTableComponent,
    AlertComponent,
  ],
  providers: [DatePipe],
  templateUrl: './record-assessment.component.html',
  styleUrl: './record-assessment.component.scss',
})
export class RecordAssessmentComponent {
  hideMenu: boolean = true;
  chartOptions: Partial<ChartOptions>;
  hideFormDialog: boolean = false;
  id: string = '';
  selectedAssessment: Assessment = {} as Assessment;
  currentAssessment: Assessment = {} as Assessment;
  private sub = new Subscription();

  list: AssessmentHistory[] = [];
  showHistory: boolean = false;
  fixedColumn = 'date_assesssment';
  columns: DynamicTableColumn[] = [
    {
      property: 'date_assesssment',
      name: 'Data da avaliação',
    },
    {
      property: 'height',
      name: 'Altura',
    },
    {
      property: 'weight',
      name: 'Peso',
    },
  ];
  currentPage = 1;
  totalPages = 0;

  showImcRisk: boolean = false;
  imcRisks: string[] = [];
  fatRisks: string[] = [];
  patientType: number = 2;

  constructor(
    private location: Location,
    private assessmentRepo: AssessmentRepositoryService,
    private notify: NotificationService,
    private confirmDialog: ConfirmDialogService,
    private record: RecordService,
    private datePipe: DatePipe
  ) {
    this.chartOptions = {
      series: [
        {
          name: 'Medição 1',
          data: [
            { x: new Date('2023-01-01').getTime(), y: 10 },
            { x: new Date('2023-02-01').getTime(), y: 15 },
            { x: new Date('2023-03-01').getTime(), y: 8 },
            { x: new Date('2023-04-01').getTime(), y: 12 },
          ],
        },
        {
          name: 'Medição 2',
          data: [
            { x: new Date('2023-01-15').getTime(), y: 20 },
            { x: new Date('2023-02-20').getTime(), y: 18 },
            { x: new Date('2023-03-25').getTime(), y: 22 },
            { x: new Date('2023-04-10').getTime(), y: 25 },
          ],
        },
      ],
      chart: {
        type: 'line',
        height: 350,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime', // Define o eixo X como datas
        title: {
          text: 'Data da Medição',
        },
      },
      yaxis: {
        title: {
          text: 'Dobras Cutâneas (mm)',
        },
        labels: {
          formatter: (val: number) => `${val} mm`,
        },
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy', // Formata a data no tooltip
        },
        y: {
          formatter: (val: number) => `${val} mm`,
        },
      },
      title: {
        text: 'Evolução das Dobras Cutâneas',
        align: 'left',
      },
    };
  }

  ngOnInit(): void {
    this.id = this.record.getPatient()?.id!;
    this.patientType = this.record.getPatient()?.type!;
    this.findCurrent(this.id);
  }

  showFormDialog(): void {
    this.selectedAssessment = {
      height: this.currentAssessment.height,
    } as Assessment;
    this.hideFormDialog = true;
  }

  editCurrent(): void {
    this.selectedAssessment = { ...this.currentAssessment };
    this.hideFormDialog = true;
  }

  save(input: Assessment) {
    if (!input.id) {
      this.create(input);
      return;
    }
    this.update(input);
  }

  create(input: Assessment): void {
    this.assessmentRepo.create({ ...input, patient_id: this.id }).subscribe({
      next: (response) => {
        this.hideFormDialog = false;
        this.notify.addNotification('success', 'Avaliação criada com sucesso');
        const { data } = response;
        this.selectedAssessment = this.parseAssessment(data);
        this.findCurrent(this.id);
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

  update(input: Assessment): void {
    this.assessmentRepo.update({ ...input, patient_id: this.id }).subscribe({
      next: (response) => {
        this.hideFormDialog = false;
        this.notify.addNotification(
          'success',
          'Avaliação atualizada com sucesso'
        );
        const { data } = response;
        this.selectedAssessment = this.parseAssessment(data);
        this.findCurrent(this.id);
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

  delete(id: string): void {
    this.assessmentRepo.delete(id).subscribe({
      next: () => {
        this.hideFormDialog = false;
        this.notify.addNotification(
          'success',
          'Avaliação removida com sucesso'
        );
        this.selectedAssessment = {} as Assessment;
        this.hideFormDialog = false;
        this.findCurrent(this.id);
      },
      error: (error) => {
        errorNotify(() => {
          this.notify.addNotification(
            'warning',
            'Algo inesperado aconteceu, tente novamente mais tarde'
          );
        }, error);
      },
    });
  }

  findCurrent(id: string): void {
    this.assessmentRepo.getCurrent(id).subscribe({
      next: (response) => {
        const { data } = response;
        this.currentAssessment = this.parseAssessment(data.assessment);
        this.imcRisks = data.imcRisks;
        this.fatRisks = data.fatRisks;
        this.showHistory = false;
        this.showImcRisks();
      },
      error: (error) => {
        errorNotify(() => {
          this.notify.addNotification(
            'warning',
            'Nenhuma avaliação encontrada, crie uma nova'
          );
        }, error);
      },
    });
  }

  find(id: string): void {
    this.assessmentRepo.getById(id).subscribe({
      next: (response) => {
        this.hideFormDialog = true;
        const { data } = response;
        this.selectedAssessment = this.parseAssessment(data);
        this.hideFormDialog = true;
      },
      error: (error) => {
        errorNotify(() => {
          this.notify.addNotification(
            'warning',
            'Algo inesperado aconteceu, tente novamente mais tarde'
          );
          this.location.back();
        }, error);
      },
    });
  }

  toggleMenu(): void {
    this.hideMenu = !this.hideMenu;
    if (this.hideMenu) {
      document.body.classList.remove('overflow-hidden');
    } else {
      document.body.classList.add('overflow-hidden');
    }
  }

  onBack(): void {
    this.location.back();
  }

  initState(): void {
    this.sub.add(
      this.confirmDialog.observerConfirm().subscribe((confirm) => {
        if (confirm.status && confirm.action_event === 'REMOVE_ASSESSMENT') {
          this.delete(this.selectedAssessment!.id!);
        }
      })
    );
  }

  parseAssessment(data: AssessmentResponse) {
    return {
      id: data.id,
      patient_id: data.patient_id,
      date_assesssment: data.date_assesssment,
      weight: data.weight,
      height: data.height,
      imc: data.imc,
      body_density: data.body_density,
      fat_percentage: data.fat_percentage,
      obs: data.obs,
      peito: data.phy_skin_folds.peito,
      abdominal: data.phy_skin_folds.abdominal,
      coxa: data.phy_skin_folds.coxa,
      triceps: data.phy_skin_folds.triceps,
      subescapular: data.phy_skin_folds.subescapular,
      suprailiaca: data.phy_skin_folds.suprailiaca,
      axilar_media: data.phy_skin_folds.axilar_media,
      cintura: data.phy_circumferences.cintura,
      quadril: data.phy_circumferences.quadril,
      braco: data.phy_circumferences.braco,
      panturrilha: data.phy_circumferences.panturrilha,
    };
  }

  handleSelect(id: string) {
    const assessment = this.list.find((patient) => patient.id === id) || null;
    this.find(assessment!.id!);
  }

  history(): void {
    this.assessmentRepo.getHistory(this.id, this.currentPage, 4).subscribe({
      next: (response) => {
        this.list = response.data.items.map((item) => ({
          ...item,
          date_assesssment: this.datePipe.transform(
            item.date_assesssment,
            'dd/MM/yyyy',
            '+1000'
          )!,
        }));
        this.totalPages = response.data.pages;
      },
      error: (error) => {
        errorNotify(() => {
          this.notify.addNotification(
            'warning',
            'Algo inesperado aconteceu, tente novamente mais tarde'
          );
        }, error);
      },
    });
  }

  handlePageChange(page: number) {
    this.currentPage = page;
    this.history();
  }

  showHistoryTable(): void {
    this.showHistory = !this.showHistory;
    if (this.showHistory) {
      this.history();
    }
  }

  showImcRisks(): void {
    let show = true;

    if (
      this.currentAssessment.fat_percentage &&
      Number(this.currentAssessment.fat_percentage) <= 25 &&
      this.patientType === 2
    ) {
      show = false;
    }

    if (
      this.currentAssessment.fat_percentage &&
      Number(this.currentAssessment.fat_percentage) <= 32 &&
      this.patientType === 1
    ) {
      show = false;
    }

    this.showImcRisk = show;
  }
}
