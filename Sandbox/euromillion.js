// 5 numéros
// numéros de 1 à 50
// 2 étoiles
// étoiles de 1 à 12
// Random integer between min (inclusive) and max (exclusive)
var randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
console.log(randomInt(0, 100));

// Les paramètres passés sont toujours accessibles dans les fonctions plus tard, même si pas utilisé lors de l'appel du constructeur !!
// exemple : p_versionLoto sera utilisatable dans toutes les fonctions mêmes si pas affecté plus tard --> une variable privée est créée et utilisable plus tard
function TicketLoto(p_joueur,p_versionLoto){
  this.numeros=[];
  this.etoiles=[];

  this.joueur=p_joueur;

  // variable privée
  var versionRegle='v2';

  // Fonction privée !!
  // non accessible à l'extérieur
  function ajouterUnNumero(n){
    if (this.numeros.length<5
        && n > 0
        && n < 51
        && this.numeros.length < 5
        && this.numeros.indexOf(n) === -1
        )
          this.numeros.push(n);
      else {
        throw new Error('Règles d ajout des numéros non respectées');
      }
  }

  // méthode
  this.ajouterNum = function() {
    for(var i=0;i<arguments.length;i++){
      var n=arguments[i];
      //if(typeof n === 'number') 
      if(Number.isInteger(n))
        ajouterUnNumero.call(this,n);
    }
  }
}

// Chaque instance de l'objet utilisera de la mémoire pour les méthodes qu'il contient.
// Pour éviter ce gachis de mémoire pour des méthodes communes on déclare des prototypes
// La méthode est placée à un emplacement mémoire commun.
// Chaque objet regarde dans son espace particulier puis va dans l'espace commun si la méthode n'a pas été redéclaré dans l'objet
TicketLoto.prototype.ajouterUneEtoile = function (n){
    if (this.etoiles.length<2
        && n > 0
        && n < 13
        && this.etoiles.length < 2
        && this.etoiles.indexOf(n) === -1
        )
          this.etoiles.push(n);
      else {
          throw new Error('Règles d ajout des étoiles non respectées');
      }
  }

TicketLoto.prototype.ajouterEtoile = function(n){
    for(var i=0;i<arguments.length;i++){
        var n=arguments[i];
        //if(typeof n === 'number') 
        if(Number.isInteger(n))
          this.ajouterUneEtoile(n);
      }
    }