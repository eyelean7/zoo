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
    <li id="animal" *ngFor="let currentAnimal of animalList | age:filterByAge"><h3>{{currentAnimal.name}}</h3><button class="btn btn-info" (click)="showDetails(currentAnimal)">View Info</button>
      <ul *ngIf="animalDetails">
        <li>Species: {{currentAnimal.species}}</li>
        <li>Age:{{currentAnimal.age}}</li>
        <li>Diet: {{currentAnimal.diet}}</li>
        <li>Location: {{currentAnimal.location}}</li>
        <li>Caretakers: {{currentAnimal.caretakers}}</li>
        <li>Sex: {{currentAnimal.sex}}</li>
        <li>Likes: {{currentAnimal.likes}}</li>
        <li>Dislikes: {{currentAnimal.dislikes}}</li>
      </ul>
      <button class="btn btn-warning" (click)="editAnimal(currentAnimal)">Edit!</button>
    </li>
  </ul>
  `
})

 export class AnimalListComponent {
   @Input() animalList: Animal[];
   @Input() animalDetails: Animal = null;
   @Output() clickSender = new EventEmitter();
  //  @Output() detailSender = new EventEmitter();
   filterByAge: string = "allAnimals"

   editAnimal(animal: Animal) {
     this.clickSender.emit(animal)
   }

   showDetails(animal: Animal) {
     this.animalDetails = animal;
    //  this.detailSender.emit(animal)
   }

   onChange(optionFromMenu){
     this.filterByAge = optionFromMenu;
   }

 }
