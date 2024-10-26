import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { AlertComponent } from '../../../../core/components/alert/alert.component';
import { parseFormErrorMessage } from '../../../../core/helpers/form-error-message.helper';
import { ConfirmDialogService } from '../../../../core/services/confirm-dialog-service/confirm-dialog.service';
import { Assessment } from '../../models/assessment.model';

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
  assesment?: Assessment;
  form!: FormGroup;
  @Output()
  saveEvent = new EventEmitter();
  @Output()
  closeEvent = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private confirmDialog: ConfirmDialogService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      id: [this.assesment?.id],
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

    this.saveEvent.emit(this.parseAssessment(this.form.value));
  }

  close() {
    this.closeEvent.emit();
  }

  getErrorMessage(controlName: string): string {
    return parseFormErrorMessage(this.form, controlName);
  }

  handleDelete() {
    this.confirmDialog.showDialog(
      'Deseja realmente excluir este registro?',
      'REMOVE_ASSESSMENT'
    );
  }

  parseAssessment(data: any) {
    return {
      id: data.id,
      weight: +data.weight,
      height: +data.height,
      peito: data.peito != null ? +data.peito : null,
      abdominal: data.abdominal != null ? +data.abdominal : null,
      coxa: data.coxa != null ? +data.coxa : null,
      triceps: data.triceps != null ? +data.triceps : null,
      subescapular: data.subescapular != null ? +data.subescapular : null,
      suprailiaca: data.suprailiaca != null ? +data.suprailiaca : null,
      axilar_media: data.axilar_media != null ? +data.axilar_media : null,
      cintura: data.cintura != null ? +data.cintura : null,
      quadril: data.quadril != null ? +data.quadril : null,
      braco: data.braco != null ? +data.braco : null,
      panturrilha: data.panturrilha != null ? +data.panturrilha : null,
    };
  }
}
