
const numeroSorteado = [10, 50, 10, 98, 23, 99, 113, 76, 84, 78, 125, 1];
let i = 0;

function gets () {
    const valor = numeroSorteado[i];
    i++;
    return valor;

}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};