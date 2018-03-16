import { Component, OnInit } from '@angular/core';
import { Zoo } from './models/zoo';
import { Carnivore, Animal, Herbivore } from './models/animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  zoo: Zoo;
  lion: Animal = new Carnivore();
  girafe: Animal = new Herbivore();
  elephant: Animal = new Herbivore();
  newName: string;
  newPoids: number;
  newRegimeAlimentaire: String;
  selectedAnimal: Animal;

  constructor() {
    // setInterval(() => this.lion.name = new Date() + '', 1000);
  }

  ngOnInit() {
    this.zoo = new Zoo();

    this.lion.name = 'lion';
    this.lion.poids = 375;
    this.zoo.animaux.push(this.lion);

    this.girafe.name = 'girafe';
    this.girafe.poids = 1000;
    this.zoo.animaux.push(this.girafe);

    this.elephant.name = 'elephant';
    this.elephant.poids = 7000;
    this.zoo.animaux.push(this.elephant);
  }

  save() {
    // this.lion.poids = document.getElementById('poids').value;
  }

  ajouterAnimal() {
    let newAnimal;
    if (this.newRegimeAlimentaire === 'Carnivore') {
      newAnimal = new Carnivore();
    } else {
      newAnimal = new Herbivore();
    }
    newAnimal.name = this.newName;
    newAnimal.poids = this.newPoids;
    this.zoo.animaux.push(newAnimal);
    this.newName = 'no name';
    this.newPoids = 0;
  }

  selectionner(animal) {
    this.selectedAnimal = animal;
  }

  alert(e) {
    alert(e);
  }

}
