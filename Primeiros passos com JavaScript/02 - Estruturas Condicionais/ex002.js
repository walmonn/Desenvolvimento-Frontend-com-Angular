/*

1 - Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + n3) /3;

classificação:

- Média menor que 5, Reprovação;
- Média entre 5 e menor 7, Recuperação;
- Média acima de 7, Aprovado;

*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Você Tirou uma nota ' + media.toFixed(2) + ' e foi Reprovado')
}else if (media >= 5 && media <7){
    console.log('Você Tirou uma nota ' + media.toFixed(2) + ' e ficou de Recuperação')
}else
console.log('Você Tirou uma nota ' + media.toFixed(2) + ' e foi Aprovado')
