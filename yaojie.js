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
console.log('Hello World!');



