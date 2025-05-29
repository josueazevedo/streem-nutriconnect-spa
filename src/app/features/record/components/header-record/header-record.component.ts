import { Component, Input } from '@angular/core';
import { NavHeaderComponent } from '../../../../core/components/nav-header/nav-header.component';

@Component({
  selector: 'app-header-record',
  standalone: true,
  imports: [NavHeaderComponent],
  templateUrl: './header-record.component.html',
  styleUrl: './header-record.component.scss',
})
export class HeaderRecordComponent {
  @Input()
  list: string[] = [];
}
