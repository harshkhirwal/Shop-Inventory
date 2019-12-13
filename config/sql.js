var mysql = require('mysql');

const config = require('./config');

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_SQL
});
console.log("Connection created!!");

con.connect(function(err) {
    if (err) throw err;
});

module.exports = con;
