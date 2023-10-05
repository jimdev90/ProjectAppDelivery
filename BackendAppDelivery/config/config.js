const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'app_delivery',
    port: 3307
});

db.connect(function(err){
    if(err) throw err;
    console.log('DATABASE MYSQL CONNECT');
});

module.exports = db;