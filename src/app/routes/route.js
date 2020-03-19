module.exports = (app) => {


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
    res.marko(
        require('../views/restaurantes/lista/lista.marko')
    );
});

}

