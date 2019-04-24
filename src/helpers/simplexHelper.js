import * as lodash from 'lodash';

export const parseVariaveis = restricoes => {   
    const valores = [ [0] ];
    const operadores = [];

    lodash.map(restricoes, restricao => {
        const arr = [restricao.valorOperacao];
        lodash.map(restricao.variaveis, variavel => {
            arr.push(variavel.valor)
            if(valores[0].length <= restricao.variaveis.length){
                valores[0].push(-1);
            }
        })
        valores.push(arr);
        operadores.push("<=");
    })

    return { valores, operadores };
}