import { Location, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderRecordComponent } from '../../components/header-record/header-record.component';

@Component({
  selector: 'app-record-assessment',
  standalone: true,
  imports: [CommonModule, HeaderRecordComponent],
  templateUrl: './record-assessment.component.html',
  styleUrl: './record-assessment.component.scss',
})
export class RecordAssessmentComponent {
  hideMenu: boolean = true;

  constructor(private location: Location) {}

  ngOnInit(): void {
    const state = this.location.getState() as { id: string };

    if (state?.id) {
      // this.getPatient(state.id);
      return;
    }
    // this.initForm();
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
