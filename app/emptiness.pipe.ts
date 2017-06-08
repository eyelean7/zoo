import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "emptiness",
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
} else if (desiredEmptiness === "almostEmptyKegs") {
  for (var i = 0; i < input.length; i++) {
    if (input[i].pints <= 10 && input[i].pints > 0) {
      output.push(input[i]);
    }
  }
  return output;
} else {
  return input
    }
  }
}
