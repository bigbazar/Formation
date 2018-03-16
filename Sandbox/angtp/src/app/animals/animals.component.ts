import { Component, OnInit } from '@angular/core';
import { Animal, Carnivore } from '../model/animal';
import { ANIMALS } from '../model/mock-animals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent implements OnInit {

  animals: Animal[] = ANIMALS;
  selectedAnimal: Animal;

    constructor(private route: ActivatedRoute) {
      // On souscrit au service permettant de gérer de facçon asynchrone le changement de route
      // tslint:disable-next-line:prefer-const
      let onRouteChange = (data: {animal:Animal}) => {
          this.selectedAnimal = data.animal;
      }
    this.route.data.subscribe();
    }

  ngOnInit() {
  }

  onSelect(animal: Animal): void {
    this.selectedAnimal = animal;
  }
}
