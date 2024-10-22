import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { AlertComponent } from '../../../../core/components/alert/alert.component';
import { parseFormErrorMessage } from '../../../../core/helpers/form-error-message.helper';

@Component({
  selector: 'app-assessment-dialog',
  standalone: true,
  imports: [
    CommonModule,
    NgxMaskDirective,
    ReactiveFormsModule,
    AlertComponent,
  ],
  templateUrl: './assessment-dialog.component.html',
  styleUrl: './assessment-dialog.component.scss',
})
export class AssessmentDialogComponent implements OnInit {
  @Input()
  assesment?: AssessmentInput;
  form!: FormGroup;
  @Output()
  saveEvent = new EventEmitter();
  @Output()
  closeEvent = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      weight: [this.assesment?.weight, [Validators.required]],
      height: [this.assesment?.height, [Validators.required]],
      peito: [this.assesment?.peito],
      abdominal: [this.assesment?.abdominal],
      coxa: [this.assesment?.coxa],
      triceps: [this.assesment?.triceps],
      subescapular: [this.assesment?.subescapular],
      suprailiaca: [this.assesment?.suprailiaca],
      axilar_media: [this.assesment?.axilar_media],
      cintura: [this.assesment?.cintura],
      quadril: [this.assesment?.quadril],
      braco: [this.assesment?.braco],
      panturrilha: [this.assesment?.panturrilha],
    });
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      return;
    }

    this.saveEvent.emit(this.form.value);
  }

  close() {
    this.closeEvent.emit();
  }

  getErrorMessage(controlName: string): string {
    return parseFormErrorMessage(this.form, controlName);
  }
}

export type AssessmentInput = {
  weight: number;
  height: number;

  // PhySkinFolds fields
  peito?: number;
  abdominal?: number;
  coxa?: number;
  triceps?: number;
  subescapular?: number;
  suprailiaca?: number;
  axilar_media?: number;

  // PhyCircumferences fields
  cintura: number;
  quadril: number;
  braco: number;
  panturrilha: number;
};
