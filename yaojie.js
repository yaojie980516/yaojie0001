var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.163.1.115',
  user     : 'root',
  password : 'eleclong',
  database : 'mysql'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});


