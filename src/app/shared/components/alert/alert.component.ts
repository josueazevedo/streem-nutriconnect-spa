import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  @Input() type: 'success' | 'error' | 'warning' | 'info' | 'basic' = 'basic';
  @Input() message: string = '';
}
