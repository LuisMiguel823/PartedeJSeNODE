const mysql = require('mysql2');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: '',
  port :1010,
  database : 'Luis Miguel'  
});
connection.connect();

console.log("Perfeito!");


let query = "Select * from usuario;";
connection.query(query, function(error,results,fields){
})
connection.end();
