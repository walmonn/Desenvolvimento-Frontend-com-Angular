/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC.

IMC = Peso / (altura * altura)

Elabore um algoritimo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:

- Abaixo de 18.5 = Abaixo do Peso.
- Entre 18.5 e 25 = Peso Normal.
- Entre 25 e 30 = Acima do Peso.
- Entre 30 e 40 = Obeso.
- Acima dos 40 = Obesidade Grave.
*/

const peso = 300;
const altura = 1.80;
const imc = peso / Math.pow(altura,2);
if (imc < 18.5){
    console.log("O Seu IMC é: " + imc.toFixed(2) + "Você esta abaixo do Peso");
}else if (imc >= 18.5 && imc < 25) {
    console.log("O Seu IMC é: " + imc.toFixed(2) + "Você esta com o peso normal");
}else if (imc >=25 && imc < 30) {
    console.log("O Seu IMC é: " + imc.toFixed(2) + "Você esta acima do Peso");
}else if (imc >=30 && imc < 40) {
    console.log("O Seu IMC é: " + imc.toFixed(2) + "Você esta Obeso");
}else  
    console.log("O Seu IMC é: " + imc.toFixed(2) + "Você esta com Obesidade Morbida");


