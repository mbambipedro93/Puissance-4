# Puissance-4
Javascript (ES6), Algorithmie, Implémentation d’un jeu

Pour ceux qui ignorent les règles de ce jeu, elles sont simples et reprennent en partie celles du morpion :
• Il s’agit d’un jeu à deux joueurs (traditionnellement les rouges et les jaunes)
• La surface du jeu est une grille de dimensions variables
• Tour à tour les deux joueurs placent un pion dans la colonne de leur choix, le pion coulisse alors à la
position la plus basse possible dans la-dite colonne et c’est ensuite à l’adversaire de jouer
• Une pièce ne peut pas se poser en dehors des dimensions de la grille
• Quand un joueur aligne à la suite au moins 4 de ses pièces horizontalement, verticalement, ou en
diagonale, il remporte la partie
• Une victoire de l’un des joueurs met fin à la partie
• S’il n’y a plus de case de la grille disponible ou de possibilités de victoire pour aucun des joueurs, la
partie est déclarée nulle

Votre projet devra se présenter obligatoirement sous la forme d’un plugin javascript.
Il sera alors modulable et donc possible de lui passer au minimum les options suivantes:
• Le nombre de cases que comportera votre grille (en x et en y)
• Les couleurs des joueurs (bien sûr, il ne doit pas être possible que les deux joueurs aient la même
couleur !)

