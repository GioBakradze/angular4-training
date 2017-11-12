import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortenArgs'
})
export class ShortenArgsPipe implements PipeTransform {

    transform(value: any, from: any, to: any): any {
        return value.substr(+from, +to);
    }

}
