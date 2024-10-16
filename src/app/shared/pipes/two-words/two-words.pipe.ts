import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoWords',
  standalone: true
})
export class TwoWordsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
