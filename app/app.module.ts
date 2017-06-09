import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { EditAnimalComponent }  from './edit-animal.component';
import { AnimalListComponent }  from './animal-list.component';
import { NewAnimalComponent }  from './new-animal.component';
import { AnimalDetailsComponent } from './animal-details.component'
import { AgePipe } from './age.pipe';


@NgModule({
  imports: [ BrowserModule,
                  FormsModule],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  EditAnimalComponent,
                  NewAnimalComponent,
                  AnimalDetailsComponent,
                  AgePipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
