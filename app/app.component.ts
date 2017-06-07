import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{barName}}</h1>
      <hr>
      <keg-list [childKegList]="masterKegList"></keg-list>
    </div>
  `
})

export class AppComponent {
  barName: string = 'Epicodus Bar & Lounge';
  masterKegList: Keg[] = [
    new Keg('Eye Pee Ayyyyy', 'Katy\'s Keg', 100, 100),
    new Keg('Beer','Dan\'s Dregs', 20, 100),
    new Keg('Cider Only','Ilene\'s Imbibables', 20, 1)
  ];
}
