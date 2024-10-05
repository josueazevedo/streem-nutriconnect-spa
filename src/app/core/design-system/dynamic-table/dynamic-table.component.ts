import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dss-dynamic-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss',
})
export class DynamicTableComponent {
  @Input() columns: DynamicTableColumn[] = [];
  @Input() fixedColumn: string = '';

  @Input() data: any[] = [];
  mobileViewIndex: number = 0;

  @Input() activeSelection: boolean = false;
  @Input() action?: boolean = false;
  @Output() actionButton: EventEmitter<string> = new EventEmitter<string>();

  selecteds: Map<string, boolean> = new Map();
  selectAllState: boolean = false;

  selectedsKeys = new EventEmitter<string[]>();

  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  hideMenu: boolean = true;

  selectAll() {
    this.selectAllState = !this.selectAllState;

    this.data.forEach((item) => {
      if (!this.selectAllState) {
        this.selecteds.delete(item.id);
      } else {
        this.selecteds.set(item.id, true);
      }
    });
  }

  selectRow(id: string) {
    if (this.selecteds.get(id)) {
      this.selecteds.delete(id);
    } else {
      this.selecteds.set(id, true);
    }

    this.selectAllState = this.selecteds.size === this.data.length;
    this.selectedsKeys.emit(Array.from(this.selecteds.keys()));
  }

  nextPage() {
    this.pageChange.emit(this.currentPage + 1);
  }

  previousPage() {
    this.pageChange.emit(this.currentPage - 1);
  }

  setMobileViewIndex(index: number) {
    this.mobileViewIndex = index;
    this.toggleMenu();
  }

  toggleMenu(): void {
    this.hideMenu = !this.hideMenu;
    if (this.hideMenu) {
      document.body.classList.remove('overflow-hidden');
    } else {
      document.body.classList.add('overflow-hidden');
    }
  }

  handleActionButton(id: string) {
    this.actionButton.emit(id);
  }
}

export type DynamicTableColumn = { name: string; property: string };

export function rowsPerPageDynamicTable(
  pageDiscountHeight: number = 0
): number {
  const screenHeight = window.innerHeight;
  const headerHeight = 220 + pageDiscountHeight; //approximate header height
  const rowHeight = 53;
  const availableHeight = screenHeight - headerHeight;

  return Math.floor(availableHeight / rowHeight);
}
