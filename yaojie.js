var http = require('http');
var mysql      = require('mysql');
var connection = mysql.createPool({
  connectionLimit: 100,
  host     : '192.168.1.115',
  user     : 'root',
  password : 'eleclong',
  database : 'mysql',
  port     : '3306',
  debug: false,
  multipleStatements: true
});
http.createServer(function (request, response){

  response.writeHead(200, {'Content_Type': 'text/plain'});

  response.end('Hello World\n');

}).listen(8888);
console.log('Hello World!');



