import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TwoWordsPipe } from '../../../../shared/pipes/two-words/two-words.pipe';

@Component({
  selector: 'app-patient-action-dialog',
  standalone: true,
  imports: [CommonModule, TwoWordsPipe],
  templateUrl: './patient-action-dialog.component.html',
  styleUrl: './patient-action-dialog.component.scss',
})
export class PatientActionDialogComponent {
  @Input() show: boolean = false;
  @Output() toRecord = new EventEmitter();
  @Output() toForm = new EventEmitter();
  @Output() closeModel = new EventEmitter();
  @Input() name?: string = '';

  selectInternalForm() {
    this.toForm.emit();
    this.close();
  }

  selectRecord() {
    this.toRecord.emit();
    this.close();
  }

  close() {
    this.show = false;
    this.closeModel.emit();
  }
}
