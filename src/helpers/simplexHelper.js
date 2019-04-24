import * as lodash from 'lodash';

export const separaVariaveis = restricoes => {   
    const valores = [];
    const operadores = [];
    const valoresFinais = [];

    lodash.map(restricoes, restricao => {
        const arr = [];
        lodash.map(restricao.variaveis, variavel => {
            arr.push(variavel.valor)
        })
        valores.push(arr);
        operadores.push("<=");
        valoresFinais.push(restricao.valorOperacao);
    })

    return { valores, operadores, valoresFinais };
}