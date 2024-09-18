import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { PageTabContentComponent } from '../../../../shared/components/page-tab-content/page-tab-content.component';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [PageLayoutComponent, PageTabContentComponent],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.scss',
})
export class PatientFormComponent {}
