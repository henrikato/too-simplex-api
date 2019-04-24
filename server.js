import express from 'express';
import { urlencoded, json } from 'body-parser';

const app = express();

//Configuração do server para usar o body-parser
app.use(urlencoded({ extended: true }))
    .use(json())
    .set('view engine', 'ejs')
    .set('views', config.TEMPLATES_FOLDER);

//Config
import config from './src/config';

// Configura headers CORS
app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
})

//Importa todos os routers da aplicação
import Simplex from './src/routes/simplexRoute';
app.use(express.static('src'));

//Vincular a aplicação 'app' ao motor de rotas
app.use('/', Simplex);

//Definindo a porta via arquivo de configuração JSON
var port = process.env.PORT || config.PORT;

//Diz para a aplicação iniciar e escutar requisições na porta parametrizada
app.listen(port, () => {
    console.log(`Aplicação online na porta ${port}.`)
})