import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{barName}}</h1>
      <hr>
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
      <edit-keg [selectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    </div>
  `
})

export class AppComponent {
  barName: string = 'Epicodus Bar & Lounge';
  selectedKeg = null;
  masterKegList: Keg[] = [
    new Keg('Eye Pee Ayyyyy', 'Katy\'s Keg', 100, 100),
    new Keg('Beer','Dan\'s Dregs', 20, 100),
    new Keg('Cider Only','Ilene\'s Imbibables', 20, 1)
  ];
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing(){
    this.selectedKeg = null;
  }
}
