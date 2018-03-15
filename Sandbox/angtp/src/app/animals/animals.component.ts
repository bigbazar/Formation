import { Component, OnInit } from '@angular/core';
import { ANimal, Carnivore } from '../model/animal';
import { ANIMALS } from '../model/mock-animals';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  
  animals = ANIMALS;

  selectedAnimal: ANimal;


    constructor() { }

  ngOnInit() {
  }

  onSelect(animal: ANimal): void {
    this.selectedAnimal = animal;
  }
}
