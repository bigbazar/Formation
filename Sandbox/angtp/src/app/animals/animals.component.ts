import { Component, OnInit } from '@angular/core';
import { Animal, Carnivore } from '../model/animal';
import { ANIMALS } from '../model/mock-animals';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  animals: Animal[] = ANIMALS;
  selectedAnimal: Animal;

    constructor() { }

  ngOnInit() {
  }

  onSelect(animal: Animal): void {
    this.selectedAnimal = animal;
  }
}
