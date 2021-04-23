/** CRIANDO UM OBJETO SIMPLES */
// const pessoa1 = {
//     nome: "Anderson",
//     sobrenome: "Correia",
//     idade: 32,
// };

/** CRIANDO UM OBJETO COM UM FUNÇÃO FACTORED */
const makePerson = (nome, sobrenome, idade) => {
    return {
        nome: nome, // pode ser assim
        sobrenome, // ou assim
        idade,

        fala() {
            console.log(`Meu nome é ${this.nome} ${this.sobrenome}, minha idade atual é ${this.idade} anos\n...`);
        },

        incrementaIdade() {
            ++ this.idade;
        },
    }
}

pessoa1 = makePerson("Anderson", "Correia", 32);
pessoa2 = makePerson("Paula", "Miranda", 18);
pessoa3 = makePerson("Pedro", "Paulo", 60);
pessoa4 = makePerson("Carlos", "Tevez", 44);

// Utilizando o método fala()
pessoa1.fala();

// Utilizando o métido incrementaIdade()
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.fala();