import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-details',
  template:`
    <button *ngIf="animalDetails===null" class="btn btn-info" (click)="showDetails(currentAnimal)">View Info</button>
    <button *ngIf="animalDetails" class="btn btn-info" (click)="hideDetails(currentAnimal)">Hide Info</button>
      <ul *ngIf="animalDetails">
      <br>
        <li>Species: {{currentAnimal.species}}</li>
        <li>Age: {{currentAnimal.age}}</li>
        <li>Diet: {{currentAnimal.diet}}</li>
        <li>Location: {{currentAnimal.location}}</li>
        <li>Caretakers: {{currentAnimal.caretakers}}</li>
        <li>Sex: {{currentAnimal.sex}}</li>
        <li>Likes: {{currentAnimal.likes}}</li>
        <li>Dislikes: {{currentAnimal.dislikes}}</li>
      </ul>
  `

})

export class AnimalDetailsComponent {
  @Input() animalDetails: Animal = null;
  @Input() currentAnimal: Animal = null;

  showDetails(animal: Animal) {
    this.animalDetails = animal;
  }
  hideDetails(animal:Animal) {
    this.animalDetails = null;
  }

}
