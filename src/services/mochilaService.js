/**
 * Função do problema da mochila obtido em:
 * https://gist.github.com/lqt0223/21f033450a9d762ce8aee4da336363b1
 */

export const mochila = (itens, capacidade) => {
    /**
     * Esta implementação usa programação dinãmica.
     * 
     * A variável 'temp' é uma matriz que armazena a solução ótima de um sub-problema,
     * solução esta que é utilizada durante a execução da função.
     * Isto é essencialmente a implementação de um 'cache'
     * no tempo de execução da função (Memoization).
     * Esta variável, portanto, armazenará a solução ótima para diferentes capacidades e itens.
     */
    var temp = [];
  
    // Preenchendo a matriz de sub-problemas.
    for (var i = 0; i < itens.length; i++) {
      // A variável 'cap' repretenta a capacidade de um sub-problema.
      var linha = [];
      for (var cap = 1; cap <= capacidade; cap++) {
        linha.push(solucao(i,cap));
      }
      temp.push(linha);
    }
  
    // A última célula da matriz contém a solução final do problema principal.
    return(ultimaCelula());
  
    function ultimaCelula(){
      var ultimaLinha = temp[temp.length - 1];
      return ultimaLinha[ultimaLinha.length - 1];
    }
  
    function solucao(linha,capacidade){
      const SEM_SOLUCAO = {maiorValor: 0, itensSelecionados: []};
      // o índice da coluna sempre começa com zero.
      var coluna = capacidade - 1;
      var ultimoItem = itens[linha];
      // 'capRestante' possui a capacidade restante para o sub-problema resolver.
      var capRestante = capacidade - ultimoItem.peso;
  
      // Aponta a última solução para esta capacidade,
      // que está na célula da linha anterior com a mesma coluna.
      var ultimaSolucao = linha > 0 ? temp[linha - 1][coluna] || SEM_SOLUCAO : SEM_SOLUCAO;
      // Aponta para a última solução para a capacidade restante,
      // que está na célula da linha anterior da coluna correspondente.
      var ultimaSub = linha > 0 ? temp[linha - 1][capRestante - 1] || SEM_SOLUCAO : SEM_SOLUCAO;
  
      // Se o peso de algum dos itens for maior que a capacidade restante, retorna a solução anterior.
      if(capRestante < 0){
        return ultimaSolucao;
      }
  
      // Compara a solução ótima do sub-problema atual com uma capacidade específica
      // com uma nova tentativa de solução com o último item adicionado.
      var ultimoValor = ultimaSolucao.maiorValor;
      var ultimoValorSub = ultimaSub.maiorValor;
  
      var novaCapacidade = ultimoValorSub + ultimoItem.valor;
      if(novaCapacidade >= ultimoValor){
        // copia o subset da solução do último sub-problema.
        var _ultimoSubset = ultimaSub.itensSelecionados.slice();
        _ultimoSubset.push(ultimoItem);
        return {maiorValor: novaCapacidade, itensSelecionados: _ultimoSubset};
      }else{
        return ultimaSolucao;
      }
    }
  }