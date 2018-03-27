# MyRPG

Benjamin Delacombaz

benjamin.delacombaz@cpnv.ch

SI-T1a

## Pré-requis

Lire la documentation se trouvant dans le fichier [../docs/sources.md](https://github.com/BenjaminDelacombaz/JSOO/blob/master/docs/sources.md)

Il n'est pas nécessaire de lire __toute__ la documentation pour pouvoir faire cet exercice. La cheat sheet qui se trouve dans le document [../docs/cheatSheet.md](https://github.com/BenjaminDelacombaz/JSOO/blob/master/docs/cheatSheet.md) doit normalement subvenir aux besoins de l'exercice.

Si vous avez terminé l'exercice plus rapidement, je vous conseille quand même de lire la documentation.

## Objectifs

* Mettre en pratique ce que vous avez lu dans la documentation
* Utiliser la programmation orientée objet

## Languages

* HTML
* JavaScript

## Donnée

Vous devez créer un petit jeu style RPG en utilisant la programmation orienté objet que propose JavaScript.

* Un personnage possède les attributs suivant:
  * Un nom
  * Des points de vie
  * De la force
  * Des points de mana

* Deux classes de personnage
  * Magicien
  * Guerrier

* Un personnage peut être :
  * Un magicien
  * Un guerrier

* Pouvoirs de classe
  * Un magicien peut attaquer un autre personnage ou lui même de 2 fois la valeur de sa force mais lui coute 20 de mana
  * Un guerrier peut soigner un autre personnage ou lui même de 4 fois la valeur de sa force mais lui coute l'entièreté de sa mana

* Pouvoir commun aux personnages
  * Un personnage peut attaquer un autre personnage ou lui même de la valeur de sa force
  * Un personnage peut soigner un autre personnage ou lui même de 10, lui augmentant donc sa vie

* Un personnage peut:
  * Mourir (points de vie <= 0)
  * Ne plus avoir de mana (points de mana <= 0)
  * ne plus avoir assez de mana (points de mana < cout en mana)
