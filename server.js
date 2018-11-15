var http = require('http');
http.createServer(function (request, response){

  response.writeHead(200, {'Content_Type': 'text/plain'});

  response.end('Hello World\n');

  }).listen(80);
console.log('server running at http://122.152.214.116:80/');
