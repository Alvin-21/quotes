import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): string {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var timeDifference = Math.abs(todayWithNoTime - value);
    var timeDifferenceSeconds = timeDifference * 0.001;

    return timeDifferenceSeconds + "s";
  }
}
