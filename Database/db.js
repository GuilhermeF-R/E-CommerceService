// db.js
const mysql = require('mysql2');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Carol007',
  database: 'ecommerce_data'
});

module.exports = connection;
