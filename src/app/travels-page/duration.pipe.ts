import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class durationPipe implements PipeTransform {
  transform(value: number): string {
    if (value == 1) {
		return '1 night'
	} else if (value == 0) {
		return 'day trip'
	} else {
		return value + " nights";
	}
  }
}
