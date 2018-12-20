let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    post: 8090,
    user: 'bongki',
    password: 'bongki',
    database: 'qring_db'
});

module.exports = connection;