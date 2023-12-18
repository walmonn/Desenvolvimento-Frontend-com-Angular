class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;        
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const wagner = new Pessoa('Wagner', 45);
const luciana = new Pessoa('Luciana', 43);

console.log(wagner, luciana);
wagner.descrever();
luciana.descrever();

