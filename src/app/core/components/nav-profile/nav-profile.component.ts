import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Profile,
  ProfileService,
} from '../../services/profile/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-profile.component.html',
  styleUrl: './nav-profile.component.scss',
})
export class NavProfileComponent {
  profile$: Observable<Profile | undefined>;

  constructor(private profile: ProfileService) {
    this.profile$ = this.profile.getProfile();
  }
}
