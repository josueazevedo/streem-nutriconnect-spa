import { Component, Input } from '@angular/core';
import { NavHeaderComponent } from '../../../../core/components/nav-header/nav-header.component';

@Component({
  selector: 'app-header-patient',
  standalone: true,
  imports: [NavHeaderComponent],
  templateUrl: './header-patient.component.html',
  styleUrl: './header-patient.component.scss',
})
export class HeaderPatientComponent {
  @Input()
  list: string[] = [];
}
