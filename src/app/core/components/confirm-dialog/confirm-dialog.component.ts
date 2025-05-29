import { Component, EventEmitter, Output } from '@angular/core';
import { ConfirmDialogService } from '../../services/confirm-dialog-service/confirm-dialog.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
})
export class ConfirmDialogComponent {
  showConfirmDialog!: Observable<{ show: boolean; text: string }>;

  constructor(private confirmDialogService: ConfirmDialogService) {
    this.showConfirmDialog = this.confirmDialogService.observerShow();
  }

  onConfirm(): void {
    this.confirmDialogService.onConfirm();
  }

  onCancel(): void {
    this.confirmDialogService.onCancel();
  }
}
