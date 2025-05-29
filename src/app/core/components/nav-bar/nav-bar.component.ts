import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { NavProfileComponent } from '../nav-profile/nav-profile.component';
import {
  Profile,
  ProfileService,
} from '../../services/profile/profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, NavMenuComponent, NavProfileComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  isMenuOpen: boolean = false;
  profile$: Observable<Profile | undefined>;

  constructor(private profile: ProfileService) {
    this.profile$ = this.profile.getProfile();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
