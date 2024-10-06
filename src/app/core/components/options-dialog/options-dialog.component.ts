import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options-dialog',
  standalone: true,
  imports: [],
  templateUrl: './options-dialog.component.html',
  styleUrl: './options-dialog.component.scss',
})
export class OptionsDialogComponent {
  @Input() show: boolean = true;
}
