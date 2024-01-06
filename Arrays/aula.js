for (let i = 0; i < 10; i++) {
    
    console.log(i);    
}

const nome = "Wagner Alves do Monte"

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i]; 
    console.log(letra);
          
}

console.log(nome.length);

const lista_vazia = []

const alunos = ["wagner", "Luciana", "Guilherme", "Gabriela", "Lorena", "Lucas"];

alunos.push('Raimunda'); /* adiciona um nome na lista */

alunos[7] = "Walter"; /* adiciona um nome na lista na posição escolhida */

lista_vazia.push("Teste", 10);

alunos.pop(); /* deleta o ultimo nome */

alunos.splice(0, 2); /* deleta uma posição na lista, neste exemplo, começando na posição 0, remova 2 itens */

console.log(alunos);

console.log(lista_vazia);
