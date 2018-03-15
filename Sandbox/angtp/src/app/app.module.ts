// Tous les modules permettant de faire fonctionner l'appli
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Permet de binder html vers modèle
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
