import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCapitalize]',
  standalone: true,
})
export class CapitalizeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input') onInput() {
    const inputValue: string = this.el.nativeElement.value;
    const capitalizedValue = this.capitalizeWords(inputValue);

    this.renderer.setProperty(this.el.nativeElement, 'value', capitalizedValue);
  }

  private capitalizeWords(value: string): string {
    return value.replace(
      /\b\w+/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  }
}
