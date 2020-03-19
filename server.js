const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000')
});

app.get('/', function(req, res){
    res.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Ifome </h1>
            </body> 
        </html>
        `
    );
});

app.get('/restaurantes', function(req, res){
    res.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Restaurantes </h1>
            </body> 
        </html>
        `
    );
});
