// Utilisation de Filesystem, bibliothéque existante
// dans le noyau NodeJS
var fs = require('fs');

// Méthode qui va lire le fichier salutation.txt
// et qui va l'afficher en console

var content = fs.readFileSync('./salutations.txt');
console.log(content.toString());
console.log('Fin du fichier');