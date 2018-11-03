var mysql= require('mysql'); 
var pool = mysql.createConnection({ 
host : '127.0.0.1', 
port : 3360,
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
