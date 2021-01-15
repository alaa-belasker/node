var http = require('http');
var url = require('url');
var querystring = require('querystring');

// http:localhost:8080/?int1=5&int2=2&operation=SUS

var server = http.createServer(function (req, res) {
    var params = querystring.parse(url.parse(req.url).
        query);
    
    res.writeHead(200, { "Content-Type": "text/plain" });
    var result
    if ("int1" in params && "int2" in params && "operation" in params) {
        switch (params["operation"]) {
            case "ADD":
                result = parseInt(params["int1"]) + parseInt(params["int2"])
                res.write('le résultat de lopération est : ' + result);
                break;
            case "MULT":
                result = parseInt(params["int1"]) * parseInt(params["int2"])
                res.write('le résultat de lopération est : ' + result);
                break;
            case "SUS":
                result = parseInt(params["int1"]) - parseInt(params["int2"])
                res.write('le résultat de lopération est : '  + result);
                break;
            case "DIV":
                result = parseInt(params["int1"]) / parseInt(params["int2"])
                res.write('le résultat de lopération est : ' + result);
                break;
                default:
                    res.end('operator not found')
        }

    }
    else {
        res.write('Vous devez saisir deux entiers');
    }
    res.end();
});
server.listen(8080);