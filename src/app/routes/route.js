const ProdutoDao = require('../infra/produto-dao');
const db = require('../../config/database');
module.exports = (app) => {


app.get('/', function(req, res){
    res.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Quare </h1>
            </body> 
        </html>
        `
    );
});

app.get('/produtos', function(req, res){

    const produtoDao = new ProdutoDao(db);
    produtoDao.lista()
                .then(produto => res.marko(
                    require('../views/produtos/lista/lista.marko'),
                    {
                        produtos: resultados
                    }
                ))
                .catch(erro => console.log(erro));
   
    
       })};