/*function teste () {
    console.log("teste de função")

teste();
teste();
}
*/

/*function whatIsYourName (name) {
    console.log("Your Name is " + name)
}

whatIsYourName("Wagner");
whatIsYourName("Luciana");*/

/*function quadrado(valor)  {
    return (valor * valor);
}
const resultado = quadrado(2);
console.log(resultado);*/

/*function incrementarJuros(valor, percentualJuros){
    const valorAcrescido = (percentualJuros / 100) * valor;
    return valorAcrescido + valor;

}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));
console.log(incrementarJuros(100, 25));*/

function escrevaMeuNome(nome){
    return("Meu nome é " + nome);
}


function verificarMaiorIdade(idade){
    
    if (idade >= 18) {
    console.log (escrevaMeuNome("Wagner,") + " eu tenho " + idade + " anos, e já sou de MaiorIdade");
    } else
    console.log("Você ainda é de menor");
}

verificarMaiorIdade(16);













