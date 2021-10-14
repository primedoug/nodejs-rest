const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'c4Z8oHWvJmFfyYCh',
    database: 'agenda-petshop'
});

module.exports = connection;