// Tous les modules permettant de faire fonctionner l'appli
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Permet de binder html vers modèle
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsComponent } from './animals/animals.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    // Importation de FormsModule déclaré
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
