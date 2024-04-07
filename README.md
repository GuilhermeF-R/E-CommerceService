# E-CommerceService 💻


### configurações do banco de dados MySQL 🗃
"""
CREATE DATABASE ecommerce_data;
USE ecommerce_data;

CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    User_name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    User_Password VARCHAR(255) NOT NULL
);

CREATE TABLE Products (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Product_name VARCHAR(255) NOT NULL,
    Details TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    Quantity_in_inventory INT NOT NULL
);

CREATE TABLE Orders (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Id_user INT NOT NULL,
    Id_product INT NOT NULL,
    QuantityOrdered INT NOT NULL,
    DateOrder TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (Id_user) REFERENCES Users(Id),
    FOREIGN KEY (Id_product) REFERENCES Products(Id)
);

"""
#
### Funções 🧾
 • Criar usuários

 • Ver lista de usuários cadastrados 

 • Registrar produtos 

 • Ver lista de produtos cadastrados 

#
### Anotações e observações 🚀

até agora tive dificuldades em muitas coisas e aprendi muitas outras, em geral está sendo uma experiência enriquecedora.
criei tabelas, usei MySQL workbench pela primeira vez, tive que ir nas configurações do sistema Windows para ativar os comandos do MySQL pelo cmd, e infelizmente tive que usar o chatgpt devido ao curto prazo do projeto, mas mesmo assim meu aprendizado foi consideravelmente alto. (ainda mais se considerar que no começo teve momentos onde ele so atrapalhava). Esse projeto será continuado!
