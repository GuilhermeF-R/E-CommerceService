const express = require('express');
const app = express();

app.use(express.json());

// Importa as rotas
const usersRoutes = require('./usersRoutes');
const productsRoutes = require('./productsRoutes');

// Define os caminhos base para as rotas
app.use('/api', usersRoutes);
app.use('/api', productsRoutes);

// Inicia o servidor
app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});
