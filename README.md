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

Até o momento, este projeto tem sido uma experiência incrivelmente enriquecedora. Foi a minha primeira vez utilizando o MySQL Workbench, o que me proporcionou uma oportunidade empolgante de explorar suas funcionalidades. Além disso, precisei mergulhar nas configurações de variáveis de ambiente do sistema Windows para habilitar os comandos do MySQL pelo prompt de comando.

Embora o prazo do projeto tenha sido curto e tenha recorrido ao ChatGPT em algumas ocasiões, isso não diminui o quanto aprendi. Na verdade, considerando os obstáculos iniciais e os momentos em que o ChatGPT não pôde fornecer respostas realmente uteís, além das vezes em que precisei pesquisar em fóruns e tutoriais para fazer alguma linha de código funcionar corretamente, acredito que essas situações ampliaram ainda mais meu aprendizado.

Estou entusiasmado em informar que este projeto continuará!
