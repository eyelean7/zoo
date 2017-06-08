import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[]) {
    var output: Keg[] = [];
    for (var i=0; i < input.length; i++) {
      if (input[i].empty === true) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
