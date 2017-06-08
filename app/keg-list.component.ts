import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-list',
  template: `
  <h3>Show me:</h3>
  <select (change)="onChange($event.target.value)">
    <option value="allKegs" selected="selected">All Kegs</option>
    <option value="emptyKegs">Empty Kegs</option>
    <option value="nonEmptyKegs"> Not Empty Kegs</option>
    <option value="almostEmptyKegs">Almost Empty Kegs</option>
  </select>
  <hr>

  <ul>
    <li id="beer" [class]="priceColor(currentKeg)" (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of childKegList | emptiness:filterbyEmptiness"><h3 [class]= "colorbyABV(currentKeg)">{{currentKeg.name}}: {{currentKeg.pints}}</h3><button class="btn btn-info" (click)="sellPint(currentKeg)">Sell Pint</button>
      <ul>
        <li>Brand: {{currentKeg.brand}}</li>
        <li>Price: \${{currentKeg.price}}</li>
        <li>ABV: {{currentKeg.alcoholContent}}%</li>
        <div *ngIf="currentKeg.empty === true">
          <label class="mark">Mark Keg Full</label>
          <input  type="checkbox" checked (click)="toggleDone(currentKeg, false)"/>
        </div>
        <div *ngIf="currentKeg.empty === false">
          <label class="mark">Mark Keg Empty</label>
          <input type="checkbox" (click)="toggleDone(currentKeg, true)"/>
        </div>
      </ul>
      <button class="btn btn-warning" (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
    </li>
  </ul>

  `
})

 export class KegListComponent {
   @Input() childKegList: Keg[];
   @Output() clickSender = new EventEmitter();
   filterbyEmptiness: string = "allKegs"

   sellPint(currentKeg: Keg) {
     if (currentKeg.pints > 0) {
        currentKeg.pints -=1;
     } else {
       currentKeg.empty = true;
       alert('No more');
     }
   }

   editButtonHasBeenClicked(kegToEdit: Keg) {
     this.clickSender.emit(kegToEdit)
   }

   isEmpty(clickedKeg: Keg) {
     if(clickedKeg.empty === true) {
       console.log("This keg is empty!");
     } else {
       console.log("Not empty!");
     }
   }

   onChange(optionFromMenu){
     this.filterbyEmptiness = optionFromMenu;
   }

   toggleDone(clickedKeg: Keg, setEmptiness: boolean){
     clickedKeg.empty = setEmptiness;
   }

   priceColor(currentKeg) {
     if(currentKeg.price >= 100) {
       return "bg-success";
     } else if (currentKeg.price < 100 ) {
       return "bg-warning";
     } else {
     return "bg-info";
   }
  }

  colorbyABV(currentKeg) {
    if(currentKeg.alcoholContent >= 10){
      return "heavy";
    } else {
      return "light";
    }
  }
 }
