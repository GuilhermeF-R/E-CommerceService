const express = require('express');
const router = express.Router();
const db = require('../Database/db'); // Importe a configuração da conexão com o banco de dados

// Rota para listar todos os usuários
router.get('/users', (req, res) => {
  // Lógica para buscar e retornar todos os usuários do banco de dados
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuários do banco de dados:', err);
      res.status(500).json({ message: 'Erro interno do servidor' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Rota para criar um novo usuário
router.post('/users', (req, res) => {
  // Obter os dados do novo usuário do corpo da solicitação
  const { User_name, email, User_password } = req.body;

  // Validar se os dados do usuário foram fornecidos corretamente
  if (!User_name || !email || !User_password) {
    return res.status(400).json({ message: 'Dados incompletos do usuário' });
  }

  // Inserir os dados do novo usuário no banco de dados
  db.query('INSERT INTO users (User_name, email, User_password) VALUES (?, ?, ?)', [User_name, email, User_password], (err, results) => {
    if (err) {
      console.error('Erro ao criar novo usuário no banco de dados:', err);
      res.status(500).json({ message: 'Erro interno do servidor' });
    } else {
      res.status(201).json({ message: 'Novo usuário criado com sucesso', user: { id: results.insertId, User_name, email } });
    }
  });
});

module.exports = router;
