
const pessoa = {
    nome: 'Wagner Alves do Monte',
    idade : 45,

    descrever : function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();