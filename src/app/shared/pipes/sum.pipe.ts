import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(value: Array<any>, ...args: unknown[]): unknown {
    let sum = 0;
    let field = (args?.length > 0 ? args[0] : 'amount') as string;

    for (let v of value) {
      sum += v[field];
    }

    return sum;
  }

}
