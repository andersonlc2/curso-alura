let num1 = 10.45151354155132555;
let num2 = 2.5;

// console.log(num1.toString() + num2); /* Converte para STRING */

//console.log(num1.toString(2)); /* BINÀRIO */

//console.log(num1.toFixed(4)); /* Arredonda um FLOAT */

//console.log(Number.isInteger(num1)); /* retorna se é INTEIRO */
//console.log(Number.isNaN(num1)); /* retorna se é NaN */

// num1 = Number(num1.toFixed(2));

// let raiz = num1 ** 0.5 /* RAIZ QUADRADA */

/** OBJETO Math **/

let arredondaBaixo = Math.floor(num1); // Arredonda p baixo.
let arredondaCima = Math.ceil(num1); // Arredonda p cima.
let arredondaProximo = Math.round(num1); // Arredoda mais proximo.

let maior = Math.max(1,3,-500,0,6,70); // Maior numero.
let menor = Math.min(1,3,-500,0,6,70); // Menor numero.

let aleatorio = Math.random(); // Numero aleatório de 0 a 1.
let aleatorio10 = Math.random() * (10 - 1) + 1; // Numero aleatório de 1 a 10.
