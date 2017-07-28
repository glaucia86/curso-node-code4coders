var http = require('http');

//Criando um server:
var server = http.createServer(function(req, res) {

    res.end("<html><body>Portal do Cliente</body></html>")
});

server.listen(3000);

