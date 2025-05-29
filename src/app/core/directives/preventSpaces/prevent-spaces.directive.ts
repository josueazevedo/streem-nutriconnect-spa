import {
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Renderer2,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appPreventSpaces]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PreventSpacesDirective),
      multi: true,
    },
  ],
  standalone: true,
})
export class PreventSpacesDirective implements ControlValueAccessor {
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input') onInput() {
    let inputValue: string = this.el.nativeElement.value;

    const trimmedValue = inputValue.trim();

    if (trimmedValue === '') {
      this.renderer.setProperty(this.el.nativeElement, 'value', '');
      this.onChange('');
      return;
    }

    this.onChange(trimmedValue);
  }

  @HostListener('blur') onBlur() {
    const inputValue: string = this.el.nativeElement.value;

    const trimmedValue = inputValue.trim();

    this.el.nativeElement.value = trimmedValue;
  }

  writeValue(value: string): void {
    this.renderer.setProperty(this.el.nativeElement, 'value', value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
