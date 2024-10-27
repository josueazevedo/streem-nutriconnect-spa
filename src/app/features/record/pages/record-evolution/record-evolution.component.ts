import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderRecordComponent } from '../../components/header-record/header-record.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RecordPageMenuComponent } from '../../components/record-page-menu/record-page-menu.component';

@Component({
  selector: 'app-record-evolution',
  standalone: true,
  imports: [
    CommonModule,
    HeaderRecordComponent,
    NgApexchartsModule,
    RecordPageMenuComponent,
  ],
  templateUrl: './record-evolution.component.html',
  styleUrl: './record-evolution.component.scss',
})
export class RecordEvolutionComponent {
  current: any;

  constructor(private location: Location) {}

  onBack(): void {
    this.location.back();
  }
}
