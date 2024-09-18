import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigateService } from './core/services/navigate/navigate.service';
import { PATIENT_ROUTES } from './features/patient/patient.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private nav: NavigateService) {
    // nav.goTo(PATIENT_ROUTES.form);
  }
}
