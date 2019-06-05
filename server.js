import express from 'express';
import { urlencoded, json } from 'body-parser';

const app = express();

//Configuração do server para usar o body-parser
app.use(urlencoded({ extended: true })).use(json());

//Config
import config from './src/config';

// Configura headers CORS
app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'access-control-allow-origin, content-type');

    next();
})

//Importa todos os routers da aplicação
import Simplex from './src/routes/simplexRoute';
import Mochila from './src/routes/mochilaRoute';
app.use(express.static('src'));

//Vincular a aplicação 'app' ao motor de rotas
app.use('/', Simplex, Mochila);

//Definindo a porta via arquivo de configuração JSON
var port = process.env.PORT || config.PORT;

//Diz para a aplicação iniciar e escutar requisições na porta parametrizada
app.listen(port, () => {
    console.clear();
    console.log(`Aplicação online na porta ${port}.`)
})