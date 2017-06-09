import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf="selectedAnimal">
        <h3>{{selectedAnimal.name}}</h3>
        <hr>
        <h3>Edit Animal</h3>
        <label>Enter Animal Name:</label>
        <input [(ngModel)]="selectedAnimal.name" class="form-control">
        <label>Enter Animal Age:</label>
        <input [(ngModel)]="selectedAnimal.age" class="form-control">
        <label>Enter Number of Caretakers:</label>
        <input [(ngModel)]="selectedAnimal.caretakers" class="form-control">
        <button (click)="doneButtonClicked()" class="btn btn-success">Done</button>
      </div>
    </div>
  `
})


export class EditAnimalComponent {
  @Input() selectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
