import Simplex from './../app/models/Simplex';
import { separaVariaveis } from './../helpers/simplexHelper';
import { simplex } from '../services/simplexService';

export const Post = async (req, res) => {
    if(req.body === null){
        res.status(418).json({
            mensagem: "Existem dados que não foram informados. Tente novamente mais tarde."
        });
    }
    var base = req.body;

    try {
        const baseSimplex = new Simplex(
            base.numVariaveis,
            base.numIteracoes,
            base.numRestricoes,
            base.operacao
        );
        const desmontaRestricoes =  separaVariaveis(base.restricoes);
        baseSimplex.variaveis = desmontaRestricoes.valores;
        baseSimplex.restricoes = desmontaRestricoes.operadores;

        var result = {
            m: baseSimplex.numRestricoes,
            n: baseSimplex.numVariaveis,
            tableau: baseSimplex.variaveis,
            restricoes: baseSimplex.restricoes,
            max: baseSimplex.operacao
        };

        simplex(result, baseSimplex.numIteracoes);

        res.status(200).json({
            resultado: result,
            resultadoFinal: result.tableau,
            z: `Z = ${result.tableau[0][0]}`
        });
    } catch (error) {
        res.status(418).json({
            message: "O que vc tá fazendo?",
            erro: error.message
        })
    }
}