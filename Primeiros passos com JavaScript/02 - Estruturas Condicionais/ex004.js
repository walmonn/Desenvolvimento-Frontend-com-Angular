/*
4 - Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código condição de pagamento:
1 - À Vista no Débito, recebe 10% de desconto.
2 - À Vista no Dinheiro ou Pix, recebe 15% de desconto.
3 - Em 2 vezes preço normal da etiqueta sem juros.
4 - Acima de 2 vezes, preço normal de etiqueta mais juros de 10%. 
 */

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log (precoEtiqueta - (precoEtiqueta * 0.10));
}else if (formaDePagamento === 2) {
    console.log (precoEtiqueta - (precoEtiqueta * 0.15));
}else if (formaDePagamento === 3) {
    console.log  (precoEtiqueta);
}else if (formaDePagamento === 4) {
    console.log (precoEtiqueta + (precoEtiqueta * 0.10));
} 