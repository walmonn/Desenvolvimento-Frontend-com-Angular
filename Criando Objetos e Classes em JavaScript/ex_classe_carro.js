/*
  1 - Crie uma classe para representar carros.
  Os Carros Possuem uma marca, uma cor e um gasto médio de combustível por KM Rodado.
  Crie um método que dado a quantidade de KM e o preço do combustível nos de o valor gasto em reais para realizar este pecurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioPorKm
  
  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
  } 



}

const classic = new Carro('GM', 'Prata', (1/12));
console.log(classic.calcularGastoDePercurso(70, 5));
const sandero = new Carro("Renault", "Prata",(1/10));
console.log(sandero.calcularGastoDePercurso(70, 5));
