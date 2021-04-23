const numero = Number(prompt("Digite um número: "));
const titulo = document.getElementById("numero-titulo");
const textoDiv = document.getElementById("texto");

titulo.innerText = numero;
titulo.style.color = "#ff5433";

textoDiv.innerHTML = `
    <p>Raiz quadrada: ${numero ** 0.5}</p>
    <p>${numero} é interiro: ${Number.isInteger(numero)}</p>
    <p>É NaN: ${Number.isNaN(numero)}</p>
    <p>Arredondando pra baixo: ${Math.floor(numero)}</p>
    <p>Arredondando pra cima: ${Math.ceil(numero)}</p>
    <p>Com duas casas decimais: ${numero.toFixed(2)}</p>
`;
