/**
 * PRIMITIVO (Valor imutável) - String, Number, Boolean, undefined, null, (bigint, symbol)
 *  - Valores são copiados de um valor para o outro.
 * 
 * 
 * 
 * 
 * REFERENCIA (Valor mutável) - array, object, function
 * - Valores são apontados em um mesmo local da memória
 * 
 */
// let a = [1, 2, 3];
// let b = a;

// console.log(a);
// console.log(b);

// a.pop();
// b.pop();

// console.log(a);
// console.log(b);

// Como ultilizar SPREAD
let array = [5, 5, 8]
function sum(x, y, z) {
    return x + y + z;
}

console.log(sum(...array)); // SPREAD
console.log(sum.apply(null, array)); // SPREAD FUNCIONA DA MESMA FORMA QUE A FUNÇÃO .apply()

// Para copiar um valor por referencia temos que fazer um SPREAD da seguinte maneira
let a = [1, 2, 3];
let b = [...a];

b.pop();
a.push(4);
console.log(a, b);