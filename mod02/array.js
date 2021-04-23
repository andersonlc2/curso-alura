

//                 0        1        2        3
const alunos = ["Joana", "Maria", "Pedro", "Jose"];

alunos[2] = "Anderson"; // Adiciona na posição que eu esolhi
alunos.unshift("Paula"); // Adiciona no inicio do array
alunos.push("Adiciona na ultima posição do array!"); // Adiciona no fim do array
alunos[alunos.length] = "Tambem add no fim!"; // Tambem adiciona no fim do array

const removidoFim = alunos.pop(); // Remove um elemento no fim do array
const removidoInicio = alunos.shift(); // Remove um elemento no inicio do array
delete(alunos[2]); // Remove o elemento de um índice

const quebra = alunos.slice(-1); // Quebra o array em partes


console.log(typeof(alunos)); // Array sempre é um objeto
console.log(alunos instanceof Array); // Confirma se a variável é um Array

console.log(alunos);
