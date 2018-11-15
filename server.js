var http = require('http');
http.createServer(function (request, response){

  response.writeHead(200, {'Content_Type': 'text/plain'});

  response.write('Hello NodeJS\n');
  
  response.end();

  }).listen(88);
console.log('server running at http://122.152.214.116:80/');
