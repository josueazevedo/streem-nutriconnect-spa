import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  public loading$: Observable<boolean>;

  constructor(private loading: LoadingService) {
    this.loading$ = this.loading.observer();
  }
}
