import { Location, CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { HeaderRecordComponent } from '../../components/header-record/header-record.component';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { AssessmentDialogComponent } from '../../components/assessment-dialog/assessment-dialog.component';
import { AssessmentRepositoryService } from '../../services/assessment-repository/assessment-repository.service';
import { Assessment } from '../../models/assessment.model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-record-assessment',
  standalone: true,
  imports: [
    CommonModule,
    HeaderRecordComponent,
    NgApexchartsModule,
    AssessmentDialogComponent,
  ],
  templateUrl: './record-assessment.component.html',
  styleUrl: './record-assessment.component.scss',
})
export class RecordAssessmentComponent {
  hideMenu: boolean = true;
  chartOptions: Partial<ChartOptions>;
  hideFormDialog: boolean = false;
  id: string = '';

  constructor(
    private location: Location,
    private assessmentRepo: AssessmentRepositoryService
  ) {
    this.chartOptions = {
      series: [
        {
          name: 'My-series',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
        {
          name: 'My-series 2',
          data: [110, 141, 135, 151, 149, 162, 169, 191, 1148],
        },
      ],
      chart: {
        height: 250,
        type: 'bar',
      },
      title: {
        text: 'My First Angular Chart',
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
  }

  ngOnInit(): void {
    const state = this.location.getState() as { id: string };

    if (state?.id) {
      // this.getPatient(state.id);
      this.id = state.id;
      return;
    }
    // this.initForm();
  }

  showFormDialog(): void {
    this.hideFormDialog = true;
  }

  create(input: Assessment): void {
    this.assessmentRepo.create({ ...input, patient_id: this.id }).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
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
}
