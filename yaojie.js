var mysql      = require('mysql');
var connection = mysql.createPool({
  connectionLimit: 100,
  host     : '192.168.1.115',
  port     : '3306',
  user     : 'root',
  password : 'eleclong',
  database : 'mysql'
  debug: false,
  multipleStatements: true
});



