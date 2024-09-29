import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dss-dropdown',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent implements ControlValueAccessor {
  show: boolean = false;
  @Input() options: Option[] = [];
  selectedOption: string = 'Selecione';
  value: string | null = null; // Valor selecionado

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  toggle(): void {
    this.show = !this.show;
  }

  selectOption(option: Option) {
    this.value = option.value;
    this.selectedOption = option.label;
    this.onChange(option.value); // Notifica o Angular Forms sobre a mudança de valor
    this.onTouched(); // Marca o campo como tocado
    this.toggle(); // Fecha o dropdown
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}
}

type Option = {
  label: string;
  value: string;
};
