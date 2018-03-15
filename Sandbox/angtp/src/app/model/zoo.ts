import { Animal, Herbivore, Carnivore } from "./animal";
// import { FUNCTION_TYPE } from '@angular/compiler/src/output';


// déclaration de classe utilisable dans d'autres sources 
export class Zoo {
    // protected = visible également par les classes filles
    //protected 
    animaux: Animal[] = [];
    animaux2: Array<Animal> = [];

    compute() {
        function callback(item, index) {

        }
        this.animaux.forEach((item, index) => {
        });
    }

    constructor() {
    }

    creerAnimal(p_animal) {
        this.animaux.push(p_animal);
    }
    //var sum = 0;
    //this.animaux.array.forEach(element => {
    //sum += element.weigth;
};
