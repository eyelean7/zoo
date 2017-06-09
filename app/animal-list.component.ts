import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
  <h3 id="select">Show me:</h3>
  <select class="form-control" (change)="onChange($event.target.value)">
    <option value="all" selected="selected">All Animals</option>
    <option value="young">Young Animals</option>
    <option value="mature">Mature Animals</option>
  </select>
  <ul class="row">
    <li class="col-sm-4 full-list" id="animal" *ngFor="let currentAnimal of animalList | age:filterByAge"><h3>{{currentAnimal.name}}</h3>
    <button class="btn btn-warning" (click)="editAnimal(currentAnimal)">Edit!</button>
    <animal-details [currentAnimal]="currentAnimal"> </animal-details>

    </li>
  </ul>
  `
})

 export class AnimalListComponent {
   @Input() animalList: Animal[];
   @Output() clickSender = new EventEmitter();
   filterByAge: string = "allAnimals";

   editAnimal(animal: Animal) {
     this.clickSender.emit(animal)
   }

   onChange(optionFromMenu){
     this.filterByAge = optionFromMenu;
   }

 }
