import * as lodash from 'lodash';

export const parseVariaveis = restricoes => {
    var funcaoObjetiva = lodash.first(restricoes);
    funcaoObjetiva = lodash.map(funcaoObjetiva.variaveis, variavel => { variavel.valor = -variavel.valor; });
    const valores = [];
    const operadores = [];

    lodash.map(restricoes, restricao => {
        const arr = [restricao.valorOperacao];
        lodash.map(restricao.variaveis, variavel => {
            arr.push(variavel.valor)
        })
        valores.push(arr);
        operadores.push(restricao.operador || "<=");
    })

    return { valores, operadores };
}