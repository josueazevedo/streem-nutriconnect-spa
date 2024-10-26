import { Component, EventEmitter, Output } from '@angular/core';
import { PATIENT_ROUTES } from '../../../features/patient/patient.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  patientRoutes = PATIENT_ROUTES;

  @Output()
  onClose = new EventEmitter<void>();

  closeMenu(): void {
    this.onClose.emit();
  }
}
