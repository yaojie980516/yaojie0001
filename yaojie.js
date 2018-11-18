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
//执行SQL语句
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) { 
     if (err) {
             console.log('[query] - :'+err);
        return;
     }
     console.log('The solution is: ', rows[0].solution);  
});  
//关闭connection
connection.end(function(err){
    if(err){        
        return;
    }
      console.log('[connection end] succeed!');
});
console.log('Hello World!');




