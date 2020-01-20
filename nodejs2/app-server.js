const http = require('http');

const requisicao = function(request, response) {
    response.writeHead(200, {"Content-type": "text/html"});
    response.write("<h1>Texto a ser exibido </h1>");
    response.end();
}
const server = http.createServer(requisicao);
const resultado = function(){
    console.log("servidor em funcionamento!");
}

server.listen(3000, resultado);