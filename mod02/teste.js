let varA = "A";
let varB = "B";
let varC = "C";
console.log(varA, varB, varC);

// 1° método
/*let temp = varA;
varA = varB;
varB = varC;
varC = temp;*/

// 2° método
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);