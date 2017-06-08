import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1 class="banner">New Keg</h1>
  <form>
    <div>
      <label>Enter Keg Name:</label>
      <input #newName style="font-size:25px" type="text" class="form-control"/>
    </div>
    <div>
      <label>Enter Keg Brand:</label>
      <input #newBrand style="font-size:25px" type="text" class="form-control"/>
    </div>
    <div>
      <label>Enter Keg Price:</label>
      <input #newPrice style="font-size:25px" type="text" class="form-control"/>
    </div>
    <div>
      <label>Enter Keg Alcohol Content:</label>
      <input #newAlcoholContent style="font-size:25px" type="number" class="form-control"/>
    </div>
    <button class="btn btn-success" (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value);newName.value='';newBrand.value='';newPrice.value='';newAlcoholContent.value='';">Add</button>
  </form>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number){
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegSender.emit(newKegToAdd);
  }
}
