import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "refillness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[], desiredEmptiness) {
    var output: Keg[] = [];
    if(desiredEmptiness === "nonEmptyKegs") {
    for (var i=0; i < input.length; i++) {
      if (input[i].empty === false) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredEmptiness === "emptyKegs") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].empty === true) {
        output.push(input[i]);
      }
    }
  return output;
} else {
  return input
    }
  }
}
