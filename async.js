var fs = require('fs');
var content = fs.readFile('./salutations.txt', function(err,result){

    if (err)
    return console.error(err);
    return console.log(result.toString());
});
console.log('Fin du fichier');