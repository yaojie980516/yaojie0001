var mysql= require('mysql'); 
var pool = mysql.createConnection({ 
host : '192.168.1.115', 
port : 3306,
user : 'root', 
password : 'eleclong', 
database : 'yaojie' 
}); 

exports.getConnection = function(callback) {
    pool.getConnection(function(err, conn) {
      if(err) {
        return callback(err);
      }
      callback(err, conn);
    });
  };
pool.end();
