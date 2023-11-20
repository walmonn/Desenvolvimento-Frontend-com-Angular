const numero = -1;
const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

if(numero <=0){
    console.log("Você digitou um numero inválido")

}else if (numeroPar) {
    console.log('Você digitou um numero par')

}else {
    console.log('Você digitou um numero Impar')
}
