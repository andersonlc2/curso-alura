const principal = () => {

    const formulario = document.querySelector("form");

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const pesoTxt = e.target.querySelector("#peso").value;
        const alturaTxt = convertPonto(e.target.querySelector("#altura").value);

        const peso = Number(pesoTxt);
        const altura = Number(alturaTxt);

        if (!peso) {
            result("Peso inválido!", "red");
            return;
        }
        if (!altura) {
            result("Altura inválida!", "red");
            return;
        }

        const imc = peso / (altura ** 2);

        if (imc < 10 || imc > 200) {
            result("Valores inválidos!", "red");
            return;
        }

        const [texto, classe] = getCalcImc(imc);

        result(texto, classe, imc);

    })

    const getCalcImc = (imc) => {
        if (imc < 18.5) return ["(Abaixo do peso)", "yellow"];
        if (imc < 24.9) return ["(Peso Normal)", "green"];
        if (imc < 29.9) return ["(Sobrepeso)", "yellow"];
        if (imc < 34.9) return ["(Obesidade grau 1)", "red"];
        if (imc < 39.9) return ["(Obesidade grau 2)", "red"];
        if (imc > 40) return ["(Obesidade grau 3)", "red"];

    };

    const imprime = () => {
        const p = document.createElement('p');
        return p;
    };

    const result = (txt, classe, imc = null) => {
        const resultado = document.querySelector(".result");
        resultado.innerHTML = "";
        const p = imprime();

        if (imc) {
            p.classList = classe;
            p.innerHTML = `Seu imc é ${imc.toFixed(2)} ${txt}`;

        } else {
            p.classList = classe;
            p.innerHTML = txt;
        }
        
        resultado.appendChild(p);
    };

    const convertPonto = (altura) => {
        let alt = altura;
        if (alt.indexOf(",") >= 0) {
            return alt.replace(",", ".");
        }
        return alt;
    };
};

principal();