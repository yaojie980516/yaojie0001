var http = require('http'); 
http.createServer(function (request, response){ 
  response.setHeader('Content_Type', 'text/html;charset=utf-8') 
  response.write('<h1>Holle NodeJS you succeed !</h1>')
  response.end()
  }).listen(88) 
console.log('server running at http://122.152.214.116:88/') 
