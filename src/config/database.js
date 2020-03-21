const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome_completo VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    senha VARCHAR(255) NOT NULL
)
`;

const INSERIR_USUARIO_1 = 
`
INSERT INTO usuarios (
    nome_completo, 
    email,
    senha
) SELECT 'Andressa Santana', 'dressalsl97@gmail.com.br', '123' WHERE NOT EXISTS 
(SELECT * FROM usuarios WHERE email = 'dressalsl97@gmail.com.br')
`;

const  PRODUTOS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL, 
    preco REAL NOT NULL,
    descricao TEXT DEFAULT ('') NOT NULL
)
`;

const INSERIR_PRODUTO_1 = 
`
INSERT INTO produtos (
    nome,
    preco,
    descricao
) SELECT 'Whiska', 10.0, 'Ração para gatos castrados.' WHERE NOT EXISTS 
(SELECT * FROM produtos WHERE nome = 'Whiska')
`;

const INSERIR_PRODUTO_2 = 
`
INSERT INTO produtos (
    nome, 
    preco,
    descricao
) SELECT 'Pinga Mix', 20.0, 'Sabor - Morango.' WHERE NOT EXISTS 
(SELECT * FROM produtos WHERE nome = 'Pinga Mix')
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USUARIOS_SCHEMA);
    bd.run(INSERIR_USUARIO_1);
    bd.run(PRODUTOS_SCHEMA);
    bd.run(INSERIR_PRODUTO_1);
    bd.run(INSERIR_PRODUTO_2);

    bd.each("SELECT * FROM usuarios", (err, usuario) => {
        console.log('Usuario: ');
        console.log(usuario);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;