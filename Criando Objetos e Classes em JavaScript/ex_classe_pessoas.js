/* 
  2 - Crie uma classe para representar pessoas.
  Para cada Pessoa teremos os atributos nome, peso e altura.
  As Pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
  Instancie uma pessoa chamada José que tenha 70Kg de peso e 1,75 de altura e peça a José para dizer o valor do seu IMC;
*/

class Pessoa {  
  nome;
  peso;
  altura;

  constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc(){
    return this.peso / (this.altura * this.altura);
  }

  classificarImc(){
    const imc = this.calcularImc();
    if (imc < 18.5){
      return("O Seu IMC é: " + imc.toFixed(2) + " Você esta abaixo do Peso");
  }else if (imc >= 18.5 && imc < 25) {
      return("O Seu IMC é: " + imc.toFixed(2) + " Você esta com o peso normal");
  }else if (imc >=25 && imc < 30) {
      return("O Seu IMC é: " + imc.toFixed(2) + " Você esta acima do Peso");
  }else if (imc >=30 && imc < 40) {
      return("O Seu IMC é: " + imc.toFixed(2) + " Você esta Obeso");
  }else  
      return("O Seu IMC é: " + imc.toFixed(2) + " Você esta com Obesidade Morbida");
  }

}

const wagner = new Pessoa('Wagner', 105, 1.78);

console.log (wagner.classificarImc());
