import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { NavProfileComponent } from '../nav-profile/nav-profile.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NavMenuComponent, NavProfileComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {}
