class FirstAnimal {
    // On utilise peut les getter/setter en javascript
    // les getter/setter sont particulièrement utilisé pour rajouter des controles sur les get & set
    // Si on voulait faire comme en JAVA avec getter/setter
    // private --> _
    private _nom: string;

    get get_nom() {
        return this._nom;

    }

    set set_nom(p_nom : string) {
        if (p_nom == 'fd') p_nom = 'lion';
        this._nom = p_nom;

    }

}

export class ANimal {
    name: string = 'no name';
    weight: number = 0;

    // Déclaration inutile si dans le constructeur on déclare directement la propriété en utilisant le mot clé public
    //name : string;


    // on peut passer des valeurs par défaut des propriétés de l'ojbet
    constructor() {
    }
}

export abstract class Animal {
    name: string = 'no name';
    weight: number = 0;

    abstract meatPerWeek(): number;

    // Déclaration inutile si dans le constructeur on déclare directement la propriété en utilisant le mot clé public
    //name : string;


    // on peut passer des valeurs par défaut des propriétés de l'ojbet
    constructor() {
    }
}

interface AnimalSpec extends Animal {

}

export class Herbivore extends Animal {
    // Même si on a pas accès au source d'Animal, l'interface de la classe nous y donne accès
    chat : AnimalSpec;

    constructor() {
        super();
    }

    meatPerWeek(): number {
        return 0;
    }

}

export class Carnivore extends Animal {
    constructor(public name: string = 'no name', public weight: number = 0) {
        super();

    }

    meatPerWeek(): number {
        return 0; // this.weight/4;
    }

}  