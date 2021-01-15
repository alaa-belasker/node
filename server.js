var math = require('lodash');
var mod = require('./mesModules');
var os = require('os');
var http = require('http');
var url = require('url');
var querystring = require('querystring');

/*var server= http.createServer(function(req,resp){
    
resp.writeHead(200, {"Content-Type": "text/html"});
//resp.end('Hello world');
resp.write('<!DOCTYPE html>'+
    '<html>'+
    '   <head>'+
    '       <meta charset="UTF-8" />'+
    '       <title>Ma page Node JS</title>'+
    '   </head>'+
    '   <body>'+
    '       <p>Hello hello world</p>'+
    '   </body>'+
    '</html>'
    );
});*/


// http://localhost:8080/mapage
// http://localhost:8080
/*var server = http.createServer(function (req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.write('Hello world, this is your requested page : ' + page);
    res.end();
});




console.log(math.map([1,5,3], function(a){
return a*2;


})); */
// http://localhost:8080?prenom=john&nom=wick
/*var server = http.createServer(function (req, res) {
    var params = querystring.parse(url.parse(req.url).
        query);
    res.writeHead(200, { "Content-Type": "text/plain" });
    if ('prenom' in params && 'nom' in params) {
        res.write('Vous etes ' + params['prenom'] + ' ' +
            params['nom']);
    }
    else {
        res.write('Vous devez bien avoir un prenom et un nom, non ?');
    }
    res.end();
});
server.listen(8080);*/


server.listen(8080);

mod.sayHello();

// Utiliser le module Os pour afficher :
// l'architecture de votre machine
// le nombre de CPU
// le hostname
// et la charge moyenne

console.log("Architecture:", os.arch());
console.log("Nombre CPU", os.cpus().length);
console.log("Hostname", os.hostname());
console.log("La charge moyenne", os.loadavg());