import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <button class="btn btn-primary" *ngIf="newAnimal===false" (click)="showForm()">Add Animal</button>
  <div *ngIf="newAnimal===true">
    <h1 class="banner">New Animal</h1>
    <form class="row">
      <div class="col-SM-6">
        <div>
          <label>Enter Animal Species:</label>
          <input #newSpecies style="font-size:25px" type="text" class="form-control"/>
        </div>
        <div>
          <label>Enter Animal Name:</label>
          <input #newName style="font-size:25px" type="text" class="form-control"/>
        </div>
        <div>
          <label>Enter Animal Age:</label>
          <input #newAge style="font-size:25px" type="number" class="form-control"/>
        </div>
        <div>
          <label>Enter Animal Diet:</label>
          <input #newDiet style="font-size:25px" type="text" class="form-control"/>
        </div>
        <div>
          <label>Enter Animal Location:</label>
          <input #newLocation style="font-size:25px" type="text" class="form-control"/>
        </div>
      </div>
      <div class="col-SM-6">
        <div>
          <label>Enter Number of Caretakers:</label>
          <input #newCaretakers style="font-size:25px" type="number" class="form-control"/>
        </div>
        <div>
          <label>Enter Sex:</label>
          <input #newSex style="font-size:25px" type="text" class="form-control"/>
        </div>
        <div>
          <label>Enter Animal Likes:</label>
          <input #newLikes style="font-size:25px" type="text" class="form-control"/>
        </div>
        <div>
          <label>Enter Animal Dislikes:</label>
          <input #newDislikes style="font-size:25px" type="text" class="form-control"/>
        </div>
        <br/>
        <button class="btn btn-success" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value=''; hideForm(); ">Add</button>
      </div>
    </form>
  </div>
  `
})

export class NewAnimalComponent {
  @Input() newAnimal: boolean = false;
  @Output() newAnimalSender = new EventEmitter();

  showForm() {
    this.newAnimal = true;
  }
  hideForm() {
    this.newAnimal = false;
  }

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
