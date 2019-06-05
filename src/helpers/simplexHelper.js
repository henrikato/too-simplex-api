import * as lodash from 'lodash';

<<<<<<< HEAD
export const parseVariaveis = restricoes => {   
    const valores = [ [0] ];
=======
export const parseVariaveis = restricoes => {
    var funcaoObjetiva = lodash.first(restricoes);
    funcaoObjetiva = lodash.map(funcaoObjetiva.variaveis, variavel => { variavel.valor = -variavel.valor; });
    const valores = [];
>>>>>>> 7ee0ec6afdbed7c3ffa7d33b91e629ffaf1b31d4
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
        operadores.push(restricao.operador || "<=");
    })

    return { valores, operadores };
}