import { Component } from '@angular/core';
import { PageMenuComponent } from '../page-menu/page-menu.component';
import { PageTabComponent } from '../page-tab/page-tab.component';
import { PageTabContentComponent } from '../page-tab-content/page-tab-content.component';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [PageMenuComponent, PageTabComponent, PageTabContentComponent],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss',
})
export class PageLayoutComponent {}
