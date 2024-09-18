import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-tab-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-tab-content.component.html',
  styleUrl: './page-tab-content.component.scss',
})
export class PageTabContentComponent {
  @Input() title: string = '';
  active = false;
}
