const customExpress = require('./config/customexpress.js');
const connection = require('./infraestrutura/connection.js');
const Tabelas = require('./infraestrutura/tabelas.js');

connection.connect(erro => {
    if(erro) {
        console.log(erro);
    }
    else {
        console.log('Conectado com sucesso!');

        Tabelas.init(connection);
        const app = customExpress();
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    }
});