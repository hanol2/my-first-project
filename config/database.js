const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'nodejs'
});

conn.connect()

module.exports = conn