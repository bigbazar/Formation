class FirstAnimal{
    // On utilise peut les getter/setter en javascript
    // les getter/setter sont particulièrement utilisé pour rajouter des controles sur les get & set
    // Si on voulait faire comme en JAVA avec getter/setter
    // private --> _
    private _nom : string;

    get get_nom(){
        return this._nom;

    }
    set set_nom(p_nom){
        if(p_nom=='fd') p_nom = 'lion';
        this._nom = p_nom;

    }

}


export abstract class Animal{

    abstract meatPerWeek():number;

    // Déclaration inutile si dans le constructeur on déclare directement la propriété en utilisant le mot clé public
    //name : string;


    // on peut passer des valeurs par défaut des propriétés de l'ojbet
    constructor(public name : string='no name', weight:number=0){
    }
}   

export class Herbivore extends Animal {
  constructor(){
      super();
  }

  meatPerWeek():number{
    return 0;
}

}  

export class Carnivore extends Animal {
    constructor(){
        super();

    }

    meatPerWeek():number{
        return 0; // this.weight/4;
    }
    
}  