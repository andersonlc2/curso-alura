// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// PRIMEIRA FORMA
// const tresHoras = 60*60*3*1000; // 3 horas em milésimos de segundos
// const umDia = 60*60*24*1000; // 1 dia em milésimos de segundos
// const data = new Date(0 + tresHoras); // 01/01/1970 = MARCO 0

// SEGUNDA FORMA
//                  ano, mes, dia, hor, min, seg, milisegundos
// const data = new Date(2021, 3, 25, 15, 14, 00, 0000);

// TERCEIRA FORMA
// const data = new Date("2021-04-25 16:20:59");

// QUARTA FORMA
// const data = new Date(Date.now());

// USANDOS OS VALORES DO OBJETO DATE
// console.log("Dia", data.getDate());
// console.log("Mês", data.getMonth());
// console.log("Ano", data.getFullYear());
// console.log("Hora", data.getHours());
// console.log("Minutos", data.getMinutes());
// console.log("Segundos", data.getSeconds());
// console.log("Milésimos", data.getMilliseconds());
// console.log("Dia da semana", data.getDay());

// console.log("Data tual em ms",Date.now());

// console.log(data.toString());


function zeros(num) {
    return num < 10 ? `0${num}` : num;
}

function formataData(data) {
    const dia = zeros(data.getDate());
    const mes = zeros(data.getMonth()+1);
    const ano = data.getFullYear();
    const hora = zeros(data.getHours());
    const min = zeros(data.getMinutes());
    const seg = zeros(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}


const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
