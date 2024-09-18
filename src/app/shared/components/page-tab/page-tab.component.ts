import { CommonModule } from '@angular/common';
import { Component, ContentChildren, QueryList } from '@angular/core';
import { PageTabContentComponent } from '../page-tab-content/page-tab-content.component';

@Component({
  selector: 'app-page-tab',
  standalone: true,
  imports: [CommonModule, PageTabContentComponent],
  templateUrl: './page-tab.component.html',
  styleUrl: './page-tab.component.scss',
})
export class PageTabComponent {
  @ContentChildren(PageTabContentComponent)
  tabs!: QueryList<PageTabContentComponent>;

  activeTabIndex = 0;

  ngAfterContentInit(): void {
    // Define a primeira aba como ativa por padrão
    const activeTabs = this.tabs.toArray();
    if (activeTabs.length) {
      activeTabs[0].active = true;
    }
  }

  selectTab(index: number): void {
    this.tabs.toArray().forEach((tab, i) => {
      tab.active = i === index;
    });
    this.activeTabIndex = index;
  }
}
