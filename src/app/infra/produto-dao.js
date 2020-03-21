class ProdutoDao {

    constructor(db){
        this._db = db;
    }

    lista() {
        return new Promise((resolve, reject) => {

            this._db.all(
                'SELECT * FROM produtos',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possivel listar os produtos');

                    return resolve(resultados);
                }
            )

        })
       
    }
}

module.exports = ProdutoDao;