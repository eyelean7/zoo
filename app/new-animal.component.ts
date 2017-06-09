import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1 class="banner">New Animal</h1>
  <form>
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
    <button class="btn btn-success" (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value);newName.value='';newBrand.value='';newPrice.value='';newAlcoholContent.value='';">Add</button>
  </form>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
