var mysql      = require('mysql');
var connection = mysql.createConnection({
  connectionLimit: 100,
  host     : '192.168.1.115',
  user     : 'root',
  password : 'eleclong',
  database : 'mysql',
  port     : '3306',
  debug: false,
  multipleStatements: true
});
connection.connect(function(err){
    if(err){        
          console.log('[query] - :'+err);
        return;
    }
      console.log('[connection connect]  succeed!');
});  
//关闭connection
connection.end(function(err){
    if(err){        
        return;
    }
      console.log('[connection end] succeed!');
});
console.log('Hello World!');




