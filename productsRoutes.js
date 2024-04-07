const express = require('express');
const router = express.Router();
const db = require('./Database/db'); // Importe a configuração da conexão com o banco de dados

// Rota para listar todos os produtos
router.get('/products', (req, res) => {
  // Lógica para buscar e retornar todos os produtos do banco de dados
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuários do banco de dados:', err);
      res.status(500).json({ message: 'Erro interno do servidor' });
    } else {
      res.status(200).json(results);
    }
  });
});
// Rota para criar um novo produto
router.post('/products', (req, res) => {
 // Obter os dados do novo produto do corpo da solicitação
 const { Product_name, Details, Price, Quantity_in_inventory } = req.body;

 // Validar se os dados do produto foram fornecidos corretamente
 if (!Product_name || !Details || !Price || !Quantity_in_inventory) {
   return res.status(400).json({ message: 'Dados incompletos do produto' });
 }

 // Inserir os dados do novo produto no banco de dados
 db.query('INSERT INTO users (Product_name, Details, Price, Quantity_in_inventory) VALUES (?, ?, ?)', [Product_name, Details, Price, Quantity_in_inventory ], (err, results) => {
   if (err) {
     console.error('Erro ao criar novo produto no banco de dados:', err);
     res.status(500).json({ message: 'Erro interno do servidor' });
   } else {
     res.status(201).json({ message: 'Novo produto adicionado com sucesso', product: { id: results.insertId, Product_name, Details, Price, Quantity_in_inventory } });
   }
 });
});


module.exports = router;
