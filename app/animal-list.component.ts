import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
  <h3 id="select">Show me:</h3>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="matureAnimals">Mature Animals</option>
  </select>
  <hr>
  <ul>
    <li id="animal" *ngFor="let currentAnimal of animalList | age:filterByAge"><h3>{{currentAnimal.name}}</h3><button class="btn btn-info" (click)="showInfo(currentAnimal)">View Info</button>
      <ul class="information">
        <li>Species: {{currentAnimal.species}}</li>
        <li>Age:{{currentAnimal.age}}</li>
        <li>Diet: {{currentAnimal.diet}}</li>
        <li>Location: {{currentAnimal.location}}</li>
        <li>Caretakers: {{currentAnimal.caretakers}}</li>
        <li>Sex: {{currentAnimal.sex}}</li>
        <li>Likes: {{currentAnimal.likes}}</li>
        <li>Dislikes: {{currentAnimal.dislikes}}</li>
      </ul>
      <button class="btn btn-warning" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
    </li>
  </ul>

  `
})

 export class AnimalListComponent {
   @Input() animalList: Animal[];
   @Output() clickSender = new EventEmitter();
   filterByAge: string = "allAnimals"

   editButtonHasBeenClicked(animal: Animal) {
     this.clickSender.emit(animal)
   }

   onChange(optionFromMenu){
     this.filterByAge = optionFromMenu;
   }

 }
