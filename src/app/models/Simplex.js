export default class Simplex{
    constructor(numVariaveis, numIteracoes, numRestricoes, operacao, variaveis, restricoes){
        this.numVariaveis = Number(numVariaveis) || 0,
        this.numIteracoes = Number(numIteracoes) || 0,
        this.numRestricoes = Number(numRestricoes) || 0,
        this.variaveis = variaveis || [],
        this.restricoes = restricoes || [],
        this.operacao = operacao || true
    }
}