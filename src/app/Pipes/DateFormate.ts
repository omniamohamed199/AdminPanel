import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'FormateDate'
})
export class DateFormatePipe extends
    DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return super.transform(value, "d MMM y");
    }
}