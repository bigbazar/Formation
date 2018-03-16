import { Animal, Herbivore, Carnivore } from './animal';

export const ANIMALS: Animal[] =
  [
    new Carnivore('Lion', 300),
    new Carnivore('Puma', 200),
    new Herbivore('Girafe', 200)
  ];
