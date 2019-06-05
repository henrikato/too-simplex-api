# TooSimplex

Repositório para a implementação do algoritmo Simplex e Mochila.

Projeto de Pesquisa Operacional
5º Semestre BSI UNIVEM

O Simplex permite que se encontre valores ideais em situações em que diversos aspectos precisam ser respeitados. Diante de um problema, são estabelecidas inequações que representam restrições para as variáveis. A partir daí, testa-se possibilidades de maneira a otimizar, isto é, maximizar ou minimizar o resultado da forma mais rápida possível.

O algoritmo da mochila consiste em preencher a mochila com objetos diferentes de pesos e valores. O objetivo é que preencha a mochila com o maior valor possível, não ultrapassando o peso máximo.


## Ferramentas

- Angular
- Node.js
- GitHub para versionamento
- Heroku para hospedagem

## Nota de release a ser publicado

###Simplex

- Algoritmo Simplex para problemas de maximização.
- Algoritmo Simplex para problemas de minimização.
- É exibido o passo a passo das tabelas geradas pelo método Simplex
- Tabela de Sensibilidade.

###Mochila

- Apreentação da solução, dos itens a serem considerados e a tabela de cálculo.


##Entradas personalizadas para:

###Simplex

- Limite máximo de iterações
- Tipo de Simplex (MAX ou MIN)
- Quantidade de variáveis e restrições
- Apelido para as variávis

###Mochila
- Capacidade da mochila
- Peso e valor dos itens

##Limitações

- Problemas sem solução ou com solução infinita não são detectados

###Simplex

- Em cada variável da função objetivo e das restrições deve conter apenas o número, sem a adição do 'x'.	


###Mochila

- Não utilizar itens com pesos iguais
- Serão permitidos somente valores inteiros


##Datas Importantes

###Simplex

Datas | Eventos
--------- | ------
06/03/19 | 1ª onda
17/04/19 | 2ª onda
17/04/19 | Entrega do MVP 1
22/04/19 | 3ª onda
06/05/19 | 4ª onda
06/05/16 | Entrega do MVP 2
10/05/19 | 5ª onda
14/05/19 | 6ª onda
05/06/19 | Entrega do MVP 3

##Compatibilidade

Requisitos | Ferramentas
--------- | ------
Navegadores     | Mozila Firefox, Chrome, Internet Explorer
Sistema Operacional    | Ubuntu, Windows, Mac, RedHat

##Tecnologias

Tecnologias | Ferramentas
--------- | ------
Front-End     | HTML, TypeScript
Back-End    | Node.js, Express
Framework WEB    | Angular
Editor de Texto  | Visual Studio Code
Design pattern  |
Servidor Web    | https://toosimplex-api.herokuapp.com/

##Atividades Realizadas no Período

###Simplex

Código | Título | Tarefa | Situação | Observação
--------- | ------ | -------| -------| -------
1 | Maximizar | Montar a Tabela Simplex, e possibilitar o usuário a maximizar modelos de simplex com sistemas lineares. | Concluído | Apenas restrições de “<=”
2 | Minimizar | Montar a Tabela Simplex, e possibilitar o usuário a minimizar modelos de simplex com sistemas lineares. | Concluído | Apenas restrições de “<=”
3 | Adição de restrições | Possibilitar o usuário a adicionar inputs para maiores números de restrições. | Concluído |
4 | Remoção de restrições | Possibilitar o usuário a remover inputs para menores números de restrições. | Concluído |
5 | Demonstrar passo a passo | Demonstrar ao usuário as alterações na tabela causada pelas iterações do método simplex. | Concluído|
6  | Tabela de sensibilidade | Demonstrar ao usuário a tabela de sensibilidade. |Concluído|
7 | Apelido das variáveis | Dar apelido para as variáveis informadas no problema, para facilitar a leitura dos dados no resultado | Concluído |

###Mochila

Código | Título | Tarefa | Situação | Observação
--------- | ------ | -------| -------| -------
1 | Tabela de solução | Demonstrar ao usuário as etapas do algortimo | Concluído |
2 | Solução do problema | Mostrar ao usuário os itens selecionados pelo algoritmo como qualificados | Concluído |
 