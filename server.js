var http = require('http'); 
http.createServer(function (request, response){ 
  response.setHeader('Content_Type', 'text/html;charset=utf-8')， 
  response.write('<h1>你好NodeJS</h1>')，
  response.end()，
  }).listen(68) 
console.log('server running at http://122.152.214.116:68/') 
