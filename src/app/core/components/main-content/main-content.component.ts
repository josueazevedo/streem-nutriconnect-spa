import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';
import { NotificationComponent } from '../notification/notification.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NavHeaderComponent } from '../nav-header/nav-header.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    RouterOutlet,
    LoadingComponent,
    NotificationComponent,
    NavBarComponent,
    NavHeaderComponent,
    ConfirmDialogComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
