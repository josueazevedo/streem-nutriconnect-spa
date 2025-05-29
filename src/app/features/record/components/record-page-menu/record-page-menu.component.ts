import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecordService } from '../../services/record/record.service';
import { PatientSelect } from '../../models/patient-select.model';
import { TwoWordsPipe } from '../../../../shared/pipes/two-words/two-words.pipe';
import { RouterModule } from '@angular/router';
import { RECORD_ROUTES } from '../../record.routes';

@Component({
  selector: 'app-record-page-menu',
  standalone: true,
  imports: [CommonModule, TwoWordsPipe, RouterModule],
  templateUrl: './record-page-menu.component.html',
  styleUrl: './record-page-menu.component.scss',
})
export class RecordPageMenuComponent {
  hideMenu: boolean = true;
  @Output() back = new EventEmitter<void>();
  patient?: PatientSelect;

  recordRoutes?: typeof RECORD_ROUTES;

  constructor(private record: RecordService) {
    this.patient = this.record.getPatient();
    this.formatRoutes();
  }

  formatRoutes(): void {
    this.recordRoutes = {
      evolution: `/${RECORD_ROUTES.evolution}`,
      assessment: `/${RECORD_ROUTES.assessment}`,
      list: `/${RECORD_ROUTES.list}`,
    };
  }

  onBack(): void {
    this.back.emit();
  }

  onToggleMenu(): void {
    this.hideMenu = !this.hideMenu;
  }
}
