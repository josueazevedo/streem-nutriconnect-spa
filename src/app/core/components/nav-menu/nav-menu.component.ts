import { Component, OnDestroy } from '@angular/core';
import { NavigateService } from '../../services/navigate/navigate.service';
import { PATIENT_ROUTES } from '../../../features/patient/patient.routes';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
}
