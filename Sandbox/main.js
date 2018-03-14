// Déclarations de fonctions
var a=function maFunc() {};
// et
function maFunc(){};
// sont correctes.
// Par contre l'utilisation de var force la déclaration de la fonction avant son appel

    // 1. Portée de variables
// la portée de la variable i impose de retourner une fonction (pointeur) qu'utilisera le listener
// dans le cas contraire, la référece à la variable i utilisée renverra pour chaque listener sur le bouton la dernière valeur de i.
// dans notre exemple 5 (à cause de la boucle de parcours)
var callback=function(n) {
    return function() {console.log('hello btn'+n);}
}

for(var i=1;i<5;i++){
    var btn=document.getElementById('btn'+i);

    btn.addEventListener('click', callback(i));
}

// 2. Fonctions
// La fonction n'est pas formellement typée !! Déclarée avec 3 paramètres, on peut n'en passer que 2
maFunc(41,8);
function maFunc(a, b, c){
}
// Appel en casca&de de la fonction
function outer(x){
  function inner(y) {
      return x +y;
  }
  return inner;
}
ret = outer(5)(15); // --> 20

// 3. Objets
// Déclaration
var voiture={
    puissance : 150,
    marque : 'Renault',
    roule : function() {

    },
}
// Ajout d'un membre en dehors de la définition
voiture.model = 'Twingo';
// Suppression d'un membre
delete voiture.marque;
// Un membre peut être dynamiquement posé par une variable
var t='couleur';
voiture[t]='rouge';

// 4. Opérateurs
'chat' && 'chien' // OU --> chien
'chat' || 'chien' // ET --> chat
// --> permet d'avoir des valeurs par défaut dans des paramètres de fonctions
function animal(a) {
    pet = a || 'chien' // si a est vide, par défaut pet prend chien comme valeur
}

// 5. Tableaux
// Déclaration
//var tab=[''];
//tab=new array('');
// Parcours
var tab=['hiver','automne'];
for (var item in tab){
      console.log(item); // ---> retourne 0 1
}
for (var item in tab){
    console.log(tab[item]); // ---> retourne hiver automne
}

for (var item in voiture){
    console.log(item); // --> retourne la valeur des propriétés
}

// 6. mode stict permet d'être un peu moins permissif. Mais les habitudes étant là, difficile de réellement être autoritaire
'use strict';

// 7. Fonctions
function f1(a){
  delete a.modele; // on supprime réellement la propriété modele à l'objet voiture
a = null; // on arrête de référencer l'objet voiture
}
f1(voiture); // passage par référence

function f2(a){
 a++; // on incrémente 1 à 5. la valeur 5 reste inchangée dans la variable nb
}
var nb = 5
f2(nb); // passage par valeur

// 8. Evénemenet
// debugger
var div = document.getElementById('parent');
// déclaration d'un listener complémentaire sur la div
// Les autres listeners continue de fonctionner
// hiérarchie des évemenets
div.addEventListener('click',function(event){
                                                event.stopImmediatePropagation; // preventdefault stoppe le comportement par défaut du navigateur (ex : bouton back)
                                                console.log('parent')
                                            });

// 9. Instanciation objet
function afficheCompteur()
{
  console.log("Vitesse="+this.vitesse);
}
// Convention majuscule
function Voiture(m,p){
  console.log('Hello voiture');
  this.model=m;
  this.puissance=p;
  console.log(this.model);


  this.vitesse = 0;
  this.accelerer = function (){
      this.vitesse+=10;
  }
  this.ralentir = function (){
      this.vitesse-=5;
  }
  this.afficheCompteur = afficheCompteur;

  return 55;
}



// Appel "classique" d'une fonction
Voiture('Intel'); // le this sera window
// Instanciation objet de la fonction
mavoiture = new Voiture('Tipo'); // objet créé renvoyé vers this
console.log(mavoiture.model);
console.log(window.model);
console.log(model);
mavoiture.accelerer;
mavoiture.afficheCompteur;
mavoiture.ralentir;
mavoiture.afficheCompteur;
console.log('Hello voiture');

function afficheVitesseVehicule(fn){
    fn();
}

var btnA = document.getElementById('btn1');
var btnR = document.getElementById('btn2');
var btnC = document.getElementById('btn3');

v = new Voiture;
btnA.addEventListener('click',v.accelerer.bind(v));
btnR.addEventListener('click',v.ralentir.bind(v));
btnC.addEventListener('click',v.afficheCompteur.bind(v));

// call = Appel en précisant le this
accelerer.call(v);
afficheCompteur.call(v);
// apply = Appel en précisant le this et des paramètres sous forme de tableau
//afficheCompteur.apply(v,10,20);
// bind = gel le this en réf&érencant la référence à la fonction
afficheCompteur.bind(v);

// Random integer between min (inclusive) and max (exclusive)
var randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
console.log(randomInt(0, 100));