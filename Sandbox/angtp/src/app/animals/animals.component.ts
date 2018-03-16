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
      const onRouteChange = (p) => {
        const id: number = Number.parseInt(p.id);
        this.selectedAnimal = ANIMALS[id];
      }
      this.route.params.subscribe(onRouteChange);
     }

  ngOnInit() {
  }

  onSelect(animal: Animal): void {
    this.selectedAnimal = animal;
  }
}
