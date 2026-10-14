/*
=================================
CALCULADORA CONSUMO COMBUSTIVEL
=================================

ETAPAS DO PROJETO:

1. Obter elementos pelo ID
2. Obter valores do usuario
3. Validar os valores obtidos
4. Calcular a quantidade de litros consumidos
5. Calcular o custo total da viagem
6. Atualizar interface
7. Limpar campos

*/

// 1. Obter Elementos pelo ID
const obterElemento = (id) => document.getElementById(id);

// 2. Obter Valores Digitados
const distanciaPercorrida = () => {
    return parseFloat(obterElemento("distancia").value); 
}

const consumo = () => {
    return parseFloat(obterElemento("consumoMedio").value);
}

const precoCombustivel = () => {
    return parseFloat(obterElemento("preco").value);
}