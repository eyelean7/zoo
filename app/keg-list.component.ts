import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-list',
  template: `
    <div *ngFor="let currentKeg of childKegList">
      <h3 (click)="showInfo">{{currentKeg.name}}</h3>
      <ul>
        <li>{{currentKeg.brand}}</li>
        <li>{{currentKeg.price}}</li>
        <li>{{currentKeg.alcoholContent}} proof</li>
      </ul>
    </div>
  `
})

 export class KegListComponent {
   @Input() childKegList: Keg[];
   @Output() clickSender = new EventEmitter();
   isEmpty(clickedKeg: Keg) {
     if(clickedKeg.empty === true) {
       alert("This keg is empty!");
     } else {
       alert("Not empty!");
     }
   }

 }
