# Notes de la formation

## liens utiles
https://www.javascripture.com/RegExp
https://developer.mozilla.org/fr/docs/Web/JavaScript

https://skillvalue.com/fr/quizzes/java

## IDE
visual studio code (voir Language Server pour analyse de code côté serveur)
Atom io
brackets io

Angular est une technologie évolutive et fluctuante. Il faut avoir en tête que celle-ci peut ne plus être maintenue.

## Notes

Angular est une technologie évolutive et fluctuante. Il faut avoir en tête que celle-ci peut ne plus être maintenue.

Attention à la portée des variables.

On peut faire une passe sur le code avec un transpiler.


## Programmation Objet par prototypage

Le fait de déclarer une fonction dans l'objet créer autant de fonction qu'il y a d'objet.

Pour éviter cela, on utilise la notion de prototype. ainsi le this est propre au prototype.

## Angular : Pré-requis
 
 ### node.js  
 https://nodejs.org/fr/

**Sous windows, il faut installer node.js dans un répertoire SANS espace**

 ### npm
 npm est un peu comme maven ou gradle avec le fichier package.json (à l'image du fichier .pom ou .graddle).

Pour faire de l'angular, il faut un interpréteur de typescript

`npm -g install typescrpit`

-g : veut dire global donc pour tout utilisateur. si absent, il l'installe dans le répertoire ou est lancer la commande.

TypeScript permet de struturer le code Javascrpit. Quand on utilise Angular, cela est implicite.

**tsc : typescript compiler**

pour voir ce que fait l'interpréteur

`tsc --outDir out monFichier.ts`

On voit qu'il créer un fichier monFichier.js dans le dossier out. Il convertit en fichier JS. 
Rappel : Quand on utilise Angular, cela est implicite.

installation d'anuglar

`npm -g install  @angular/cli`

Pour contrôler les packages installés :

`npm -g list depth=0`

depth=0 => on ne regarde que le niveau 0.

Pour connaitre les versions Angular/node.js/...

`ng -v`

## Angular : création d'un projet

Création d'un projet

`ng new my-dream-app`

Ensuite, il ne faut pas oublier de se déplacer dans le dossier :

`cd projetAngluar`

Pour compiler le projet (même vide)

`ng build`

Dans le dossier `dist` on a le résultat de toute la compilation. C'est le contenu de ce dossier qu'on met sous le serveur (Apache...).


Dans le dossier `dist`, il ya des fichiers map. il permet au débuggage. Il permet nottament de faire la correspondance entre le code obfusquer dans les js de `dist` et le réel code de src.

Les dossiers :
* le dossier `node_modules` contient les modules utilisés par l'application.
Les fichiers importants :
* `tslint.json` : rêgles de codage/check... standard.
* `tsconfig.json` : paramétrage de la commande `tsc`. C'est dans ce fichier qu'on peux modifier notament les navigateurs visés (ecs5)
* `protractor.conf.js` : outil de test de bout en bout. Pour lancer les tests `ng e2e`
* `package.json` : c'est le fichier build.graddle (meta-données de l'application comme la **versions** et la licence qui par défaut est `MIT`)
    * le ``
* `package-lock.json` : c'est le fichier de liaison des versions/dépendances
* `karma.conf.js` : tests unitaires. ce lance avec
 `ng test`
     * les tests personnels sont sous chaque composant.
* `angular-cli.json`: 

## un Composant
Dans le dossier , `src\app\` 
définition d'un composant :
* `app.component.css` : un css : css que pour le composant
* `app.component.html` : un html : l'interface du composant
* `app.component.ts` : le comportement (le code)
* `app.component.spec.ts` : un spec : les tests unitaires du composant


## Outils d'editeur HTML avec Bootstrap
* Pingendo : https://pingendo.com/download.html
* mockito : 
    *   http://site.mockito.org/
    * https://www.docdoku.com/blog/2015/03/23/tests-unitaires-avec-mockito/









