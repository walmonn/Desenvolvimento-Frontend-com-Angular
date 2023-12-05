function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
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

function main () {
    const peso = 113;
    const altura = 1.78;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc (imc));
}

main();



