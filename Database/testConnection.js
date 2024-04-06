// Importa a conexão com o banco de dados
const connection = require('./db');

// Tenta fazer uma consulta de teste
connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
  console.log('Resultado da consulta:', results[0].solution);
});

// Fecha a conexão
connection.end();
