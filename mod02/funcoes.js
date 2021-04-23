/*  PRIMEIRA FORMA (CLASSICA) */
// function saudacao(nome){
//     console.log(`Hello ${nome}, how are you?`);
// }
// const variavel = saudacao("Pedro");
// console.log(variavel);


/*  SEGUNDA FORMA (FUNÇÃO ANONIMA)  */
// const saudacao2 = function (nome){
//     return `Hello ${nome}, how are you?`;
// };
// console.log(saudacao2("Anderson"));


/*  TERCEIRA FORMA (ARROW FUCTION)  */
const saudacao3 = nome => `Hello ${nome}, how are you?`;
console.log(saudacao3("Maria"));
