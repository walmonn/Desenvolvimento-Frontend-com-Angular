/* Faça um Programa para calcular o valor de uma viagem

    Você terá 5 variáveis, sendo elas:

    1 - Preço do Etanol
    2 - Preço da Gasolina
    3 - O Tipo de Combustivel que está no meu carro
    4 - Gasto médio de combustivel por KM
    5 - Distancia em KM da viagem

    Imprima no console o valor que será gasto para realizar esta viagem.
    
*/

const etanol = 3.50;
const gasolina = 5.00;
const kmPorLitros = 10;
const distancia = 100;
const tipoCombustivel = 'etanol';

const litrosCombustivel = distancia / kmPorLitros;

if (tipoCombustivel === 'etanol') {
    const valorGasto = litrosCombustivel * etanol;
    console.log('O valor total gasto na sua viagem foi de ' + valorGasto.toFixed(2));
} else {
    const valorGasto = litrosCombustivel * gasolina;
    console.log('O valor total gasto na sua viagem foi de ' + valorGasto.toFixed(2));
}


