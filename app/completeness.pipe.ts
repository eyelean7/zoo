import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({

})

export class CompletenessPipe implements PipeTransform {
  transform(input: Keg[], args) {
    return input;
  }
}
