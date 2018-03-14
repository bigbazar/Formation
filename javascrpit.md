# HTML et JavaScript

Ce document fait une récapitulation rapide des éléments abordés. 

## Documentation
Voici de l'excellente documentation

* [Mozilla Developper Network](https://developer.mozilla.org/fr/) La source !
* [devdocs](http://devdocs.io/) SUPER SITE : doc cross techno
* [Livre (numérique) en FR](http://fr.eloquentjavascript.net/)

## Conception

* Mockup (Maquette)
* Gabarit HTML
* CSS
* JavaScript

## Langage HTML

### Théorie

1. element
2. attribut
3. texte

```html
<element attribut="value">
    <element attribut="value">
    </element>
    Texte
</element>
```  



Rôle des attributs :

```html
<img id="image1" src="image1.jpg" alt="Text alternatif"> 
<img id="image2" src="image2.jpg" alt="Text alternatif"> 
<p id="image1"> Ceci est une erreur ! image1 est deja utilisé</p>


```  

### Structure d'un document

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

* `<head></head>` contient la `<meta>` information (l'information sur l'information)
* `<body></body>` partie affichée dans le `viewport`

### Balises connues

* `<hr>` -> Horinzontale Rule 
* `<h1></h1>` à `<h6></h6>` -> Headings (Titre)
* `<a href=""></a>` -> Lien
* `<img src="">` -> Image
* `<p></p>` -> Image
* `<span></span>` -> 

* `<form></form>` -> (conteneur)
    * `<input type="">` 
* `<ul></ul>` -> (conteneur) de `<li></li>`
* `<ol></ol>` -> (conteneur) de `<li></li>`
* `<header></header>` -> (conteneur)
* `<html></html>` -> (conteneur)
* `<head></head>` -> (conteneur)
* `<body></body>` -> (conteneur)
* `<nav></nav>` -> (conteneur)
* `<main></main>` -> (conteneur)
* `<footer></footer>` -> (conteneur)
* `<article></article>` -> (conteneur)
* `<div></div>` -> (conteneur)
* `<section></section>` -> (conteneur)

* `<script></script>` -> (conteneur)

### Attributs connus (universels)

* `id` 
* `class` 
* `style` 

## Langage CSS

Voici un excellent site pour s'entrainer et apprendre le CSS par la pratique : https://flukeout.github.io/

> Couche de présentation mise en page.

Insetion de CSS

* Au niveau de l'attribut `style=""`
* Via une balise `<style></style>`
* Dans un fichier externe`<link>`

> Les propriétés s'appliquent en cascade (héritage dans l'arbre)

```css
/* 
Selector CSS

selector{ // Trouve les elements correspondant
    property:value;
}
*/

html{} /* element cherche <html>*/

#html{} /* ID cherche <??? id="html">*/

.html{} /* ID cherche <??? class="html ???">*/

/*
<main id="main">
    <ul>
        <li>
            <a class="active">
        </li>
    </ul>
</main>
*/
main#main>ul>li>a.active{}

```

### Propriétés golables

> Une propriété permettant de definir plusieur (sous valeur)


```css

*{
    /* border est la globale de (border-width,...) */
    border: 1px  red solid;
    border-width: 1px;
    border-style: solid;
    border-color: red;

}
```

## Langage JS

> Gérer l'interaction et faire evluer le HTML (HTML dynamique)


* Au niveau des attributs evenementiels `onclick=""`
* Via une balise `<script>Code JavaScript</script>`
* Dans un fichier externe`<script src="fichier.js"></script>`

### Concepts Clés

> Langage a la fois : impératif, procédural, et Objet.

* Code Hoisting -> Remçontée des identifiants de variables puis de fonction.
* CamelCase
* Espace global pour javascript (browser) est l'objet `window`
* Le HTML vit dans  l'objet `window.document` -> DOM

### Element de syntaxe

```js

if( condition == true){ 

}else{

}

//for(initial; condiftion; step){}
for( var i = 0; i< 5 ; i++){}

var myObject = {a:1,b:2,c:3}

for( var key in  myObject){
    console.log(key)
    console.log(myObject[key])
}

[].forEach(function(valueDonneeAutomatiquement){});

function name(param){ // Signature
    // Corps
}

function dumb(){
    return true;
    console.log('Je ne vais etre afficher')
}

var x = dumb() //true
var z = dumb// function dumb(){..} -> référence

var temps = {
    city:'Marseille';
    temp:7,
    weather:'sun'
}

var tempora = new Object();
tempora.city='Marseille';
tempora.temp=7;
tempora.weather='sun';

function createTemps( ville , temperature, image ){
    return {
        city:ville,
        temp:temperature,
        weather:image
    }
}


```

## JavaScript plus loin :

* DOM
* Events
* Object
* Function
* Array

### DOM

> Le DOM est un arbre de NODE - ELEMENT, ATTRIBUTE, TEXT

ON peut manipuler le DOM
* Accéder (lire)
* Ajouter des Nodes (déplacer)
* Modifier des Nodes 
* Créer des Nodes 
* Retirer des Nodes 

**Retirer**

> Oon cible un Node et demande a son parent de le retirer.

```js
var child = document.querySelector('#targetToBeRemoved');
child.parentNode.removeChild(child);

// Ou vider massivement tout le contenu
document.querySelector('#cible').innerHTML = ''
```

**Créer**
```js

var copy = document.querySelector('anyElement').clone(true);
var newH1 = docuement.createElement('h1')
var newText = docuement.createTexteNode('hello world')

document.querySelector('#cible').innerHTML = '<h1>hello world</h1>'
// createElement + createTextNOde + appendChild

```


**Modifier**
```js
document.body.setAttribute('attributeName','value')
document.querySelector('input').value
document.querySelector('anyElementNonVide').innerHTML
document.querySelector('anyElementNonVide').innerText
```

**Accéder**
```js
document.body.getAttribute('attributeName')
document.getElmentById('ID') // -> retourne UN element
document.getElmentsTagName('tagName(balise)') //-> retourne COLLECTION element
document.getElmentsClassName('CSSClassName)') //-> retourne COLLECTION element
document.querySelector('CSSSelector') //-> retourne UN element (PREMIER CORRESPONDANT)
document.querySelectorAll('CSSSelector') //-> retourne COLLECTION element
```

**Ajouter**
```js
document.body.appendChild(elementRef)
```

### Event

Les *events* (événements) sont des *Object* se propageant (*propagation*) dans le DOM.

**Propagation des Events**

1. CAPTURE - `window > target`
2. BUBBLING - `target > window`

### Propriétés et méthodes des Object des Events

* `type`
* `target`
* `currentTarget`
* `stopPropagation()`
* `preventDefault()` - lien et les formulaires

### Programmation des Events

> c-a-d ajouter un *EventListener* (ecouteur d'evenement)

En HTML ...

```html

<div onclick="maFonctionPourCetEvent()"><div>

```

En JavaScript ...
```js
function maFonctionPourCetEvent(){console.log('Click OK')}


document
    .querySelector('#myelement')
    .addEventListener('click',maFonctionPourCetEvent,/*[true pour ecouter en phase de CAPTURE]*/);

document
    .querySelector('#myelement')
    .onclick = maFonctionPourCetEvent;

```

### Object

Création :

```js

var user1 = {
    name:'Bob',
    age:751
}

var user2 = new Object();
user2.name = 'Bob';
user2.age = 751;

```

### Function

Passage par référence :

```js

function foo(){console.log('foo')}

var bar = foo;

bar()// -> 'foo' - bar est une référence (alias) de foo

```

Callback *fonction passée en paramètre à une autre pour etre rappellée (call back)*

```js

function calleMeWhenClick(){console.log('calleMeWhenClick')}


document
    .querySelector('#myelement')
    .addEventListener('click',calleMeWhenClick);

function log( text ){ console.log(text);}

['Bill','Ben','Bob'].forEach(log);

```

### Array

Création :

```js

var arr1 = [] ; //vide
var arr2 = [1,2,3] ; //non vide
var arr3 = new Array() ; //vide
var arr4 = new Array(1,2,3); //non vide

var arr2 = [true,1,'hello',{name:'bob'},function(){},[1,2,3]] ; 

```

**Propriété connue**

* `length`

**Methodes connues**

* `unshift()` -> Ajoute au DEBUT
* `shift()` -> Enleve au DEBUT
* `push(n,n,n,n,...)` -> Ajoute a la FIN
* `sort(callback)` -> Applique une FONCTION de TRI -> -1 ,0 , 1
* `slice()` -> Retourne un sous ensemble
* `map(callback)` -> Retourne un NOUVEAU Tableau Contenant la valeur de retour du callback
* `forEach(callback)` -> Applique le callback sur chaque item du tableau.
* `join()` -> Fusionne les element en STRING
* `pop()` -> Enleve a la FIN
* `filter(callback)` -> Retourne un NOUVEAU Tableau FILTRE par le callback
* `splice()`

## C'est quoi et que prendre ?

### [Angular](https://angular.io/)
Angular est un framework UI

* Angular 1 = Angular JS ==> c'est du pure JavaScript

* Angular == Angular 2 et suppérieur.

Angular a gros défaut, sa documentation n'est pas super mais il permet de mettre en place de bonne pratique pour un travail en équipe.

Angular est codé maintenant en TypeScprit.

Pour TypeScprit, son environnement de développement [Visual Studio Code](https://code.visualstudio.com/), porté par le framework Electron (à l'initiative de Google Chromium).

### [Vue.js](https://vuejs.org/)
A l'image de angular vue.js est un framework UI. A la différence d'Angular, ce framwork ne necessite pas de formation, sa documentation est plus didacticiel.

### Socket.io
Socket.io est une librairie pour les applications web temps réels. Il contient une librairie client-side pour le browser et une librairie server-side pour node.js.

### [node.js](https://nodejs.org/en/)
node.js est un Javascript Server. Des versions lite existe, voir notament dans le dernier exemple de l'application météo. 
### [jQuery](https://jquery.com/) 
jQuery est une librairie DOM permettant de modifier le DOM (via son CSS principalement mais aussi javaScript). 

Pour faire des effets styler (redimmensionnement, darg&drop...)=>[jQuery user Interface](http://jqueryui.com/)

### [bootstrap](https://getbootstrap.com/)
bootstrap est framework CSS largement répendu.
