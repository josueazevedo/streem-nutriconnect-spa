import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-menu',
  standalone: true,
  imports: [],
  templateUrl: './page-menu.component.html',
  styleUrl: './page-menu.component.scss',
})
export class PageMenuComponent implements OnInit {
  showMenu = false;

  ngOnInit(): void {
    if (window.innerWidth <= 768) {
      this.showMenu = true;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
