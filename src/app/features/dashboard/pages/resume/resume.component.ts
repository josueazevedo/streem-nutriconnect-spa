import { Component } from '@angular/core';
import { NavigateService } from '../../../../core/services/navigate/navigate.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  constructor(private nav: NavigateService) {
    // this.nav.goTo('/patients');
  }
}
