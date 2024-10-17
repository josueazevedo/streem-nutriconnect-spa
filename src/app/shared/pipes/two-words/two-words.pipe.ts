import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoWords',
  standalone: true,
})
export class TwoWordsPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const words = value.split(' ');
    return words.slice(0, 2).join(' ');
  }
}
