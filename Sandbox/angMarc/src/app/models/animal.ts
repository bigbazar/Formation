export abstract class Animal {

    constructor(public name: string = 'no name', public poids: number = 1) { }

    abstract meatPerWeek();
}

export class Herbivore extends Animal {
    meatPerWeek() {
        return 0;
    }
    constructor() {
        super();
    }
}

export class Carnivore extends Animal {
    meatPerWeek() {
        return this.poids / 4;
    }
    constructor() {
        super();
    }
}
