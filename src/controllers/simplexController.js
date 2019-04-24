import Simplex from './../app/models/Simplex';
import { parseVariaveis } from './../helpers/simplexHelper';
import { simplex } from '../services/simplexService';

export const Post = async (req, res) => {
    if(req.body === null){
        res.status(422).json({
            mensagem: "Existem dados que não foram informados. Tente novamente mais tarde."
        });
    }

    var base = req.body.dadosOperacao;
    try {
        const baseSimplex = new Simplex(
            ++base.numVariaveis,
            base.numMaxIteracoes,
            ++base.numRestricoes,
            base.metodoOperacao
        );
        const parseRestricoes = parseVariaveis(req.body.restricoes);
        baseSimplex.variaveis = parseRestricoes.valores;
        baseSimplex.restricoes = parseRestricoes.operadores;
        
        var result = {
            m: baseSimplex.numRestricoes,
            n: baseSimplex.numVariaveis,
            tableau: baseSimplex.variaveis,
            restricoes: baseSimplex.restricoes,
            max: baseSimplex.operacao
        };

        simplex(result, baseSimplex.numIteracoes);

        res.status(200).json(result);
    } catch (error) {
        res.status(422).json({
            message: "O que vc tá fazendo?",
            erro: error.message
        })
    }
}