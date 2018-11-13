var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.1.115',
  port     : '3306',
  user     : 'root',
  password : 'eleclong',
  database : 'mysql'
});

exports.getConnection = function(callback){
 connection.getConnection(functuin(err, conn){
      if(err) {
          return callback(err);
         }
          callback(err, conn);
 });
};


