// CONDIÇÃO ? true : false ;

const pontuacao = 500;
const nivel = pontuacao <= 1000 ? "Usuário Normal" : "Usuário VIP";

const corUsuario = null;
const corPadrao = corUsuario || "Black";

console.log(nivel, corPadrao);