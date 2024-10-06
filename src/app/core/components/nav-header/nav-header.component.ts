import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
})
export class NavHeaderComponent {
  @Input()
  title: string = '';
  @Input()
  list: string[] = [];
  @Input()
  module: string = '';

  // constructor(
  //   private readonly router: Router,
  //   private readonly activate: ActivatedRoute
  // ) {
  //   this.router.events
  //     .pipe(
  //       tap((nav) => {
  //         if (nav instanceof NavigationEnd) {
  //           this.updateHeaderTitle();
  //         }
  //       })
  //     )
  //     .subscribe();
  // }

  // private updateHeaderTitle() {
  //   let route = this.activate.root;
  //   while (route.firstChild) {
  //     route = route.firstChild;
  //   }
  //   this.title = route.snapshot.data['header_title'];
  // }
}
