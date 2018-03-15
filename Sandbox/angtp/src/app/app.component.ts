import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Zoo } from './model/zoo';
import { Animal, Carnivore } from './model/animal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Implémentation OnInit permettant de ne pas perturber le constructor si de nombreuses choses doivent être faites
export class AppComponent implements OnInit {
ngOnInit() : void {
  
}
  title = 'Zoo ORSYS';
  
  
  // Déclaration de l'objet myanimal utilisé dans le HTML
  myanimal:Animal=new Carnivore();
  myzoo:Zoo = new Zoo();

  constructor() {
    // Valorisation de la propriété name de l'objet myanimal
    //setInterval(()=>this.myanimal.name=new Date()+'',1000);
    //setInterval(this.showDate.bind(this),1000);
  }

  showDate(){
    this.myanimal.name=new Date+' ';
  }

  save(){
    console.log(`save ${this.myanimal.name}`);
    this.myzoo.creerAnimal(this.myanimal);
  }
}

// 2 Déclarations :
// * locale au fichier !!
var mavariableLocale;
// * locale mais exportable ailleurs !!
export var mavariableGlobale;


