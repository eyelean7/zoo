import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 class="banner">{{zooName}}</h1>
      <hr>
      <div class="row">
        <animal-list [animalList]="animalList" (clickSender)="editAnimal($event)" ></animal-list>
        <edit-animal [selectedAnimal]="selectedAnimal"  (doneButtonClickedSender)="finishedEditing()"></edit-animal>
        <br>
        <hr>
      </div>
      <br>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  `
})

export class AppComponent {
  zooName: string = 'Wilderness Park Zoo';
  selectedAnimal = null;
  animalDetails: Animal = null;
  animalList: Animal[] = [
    new Animal('lion', 'Leo', 4, 'carnivore', 'jungle', 4, 'male', 'sunny rocks', 'tapping on glass'),
    new Animal('giraffe', 'Geraldine', 1, 'herbivore', 'forest', 3, 'female', 'chasing', 'loud noises'),
    new Animal('elephant', 'Elle', 6, 'herbivore', 'rain forest', 2, 'female', 'water', 'clutter')
  ];
  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  toggleDetails(clickedAnimal) {
    this.animalDetails = clickedAnimal;
  }
  finishedEditing(){
    this.selectedAnimal = null;
  }

  addAnimal(newAnimal: Animal){
    this.animalList.push(newAnimal);
  }
}
