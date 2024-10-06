import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-patient-dialog',
  standalone: true,
  imports: [],
  templateUrl: './new-patient-dialog.component.html',
  styleUrl: './new-patient-dialog.component.scss',
})
export class NewPatientDialogComponent {
  @Input() show: boolean = false;
  @Output() internalForm = new EventEmitter();
  @Output() externalForm = new EventEmitter();
  @Output() closeModel = new EventEmitter();

  selectInternalForm() {
    this.internalForm.emit();
    this.close();
  }

  selectExternalForm() {
    this.externalForm.emit();
    this.close();
  }

  close() {
    this.show = false;
    this.closeModel.emit();
  }
}
