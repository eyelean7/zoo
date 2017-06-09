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
  <ul>
    <li id="animal" *ngFor="let currentAnimal of animalList | age:filterByAge"><h3>{{currentAnimal.name}}</h3>
      <animal-details [currentAnimal]="currentAnimal"> </animal-details>
      <button class="btn btn-warning" (click)="editAnimal(currentAnimal)">Edit!</button>
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
