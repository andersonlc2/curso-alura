const meuEscopo = () => { // Todo código foi criado dentro de uma função para choque com literais

    const form = document.querySelector(".form"); // Aqui pegamos o elemento do formulario
    const botao = document.querySelector(".btn2"); // Aqui pegamos o elemento botão do tema

    const data = []; // Inicializamos o array que vai armazenar o nosso objeto do formulario

    form.addEventListener('submit', (e) => { // Aqui é inicializado o Evento submit
        e.preventDefault(); // Aqui retiramos o efeito padrão do submit

        const files = { // Esse objeto recebe os valores dos inputs do formulario
            nome: form.querySelector(".nome").value, // Pega o valor do input nome
            sobrenome: form.querySelector(".sobrenome").value, // Pega o valor do input sobrenome
            peso: form.querySelector(".peso").value, // Pega o valor do input peso
            altura: form.querySelector(".altura").value // Pega o valor do input altura
        }

        document.querySelector("#result").innerHTML = `<p> 
            Nome: <strong>${files.nome}</strong> Sobrenome: <strong>${files.sobrenome}</strong> 
            Peso: <strong>${files.peso}kg</strong> Altura: <strong>${files.altura}m</strong>
            </p>
        `; // Aqui foi adicionado o resultado á div result

        data.push(files); // O objeto criado é adicionado ao nosso array
        console.log(data); // Aqui damos um log em nosso array

    });


    let clicou = true; // Variável auxiliar sempre é alterada quando o botão é clicado
    botao.addEventListener('click', (e) => { // Adicionamos um evento para o click no botao do tema
        const ligth = { // Criamos um objeto para o tema claro
            background: "#eee",
            color: "#111",
        };
        const dark = { // Criamos um objeto para o tema escuro
            background: "#444444",
            color: "#fff"
        };

        if (clicou){ // Quando o botão é clicado ao chegar nesse if verifica se seu valor é true
            document.body.style.backgroundColor = dark.background;
            document.body.style.color = dark.color; // Adiciona o tema dark ao body
            clicou = !clicou; // Altera o valor da variável auxiliar
        }else {
            document.body.style.backgroundColor = ligth.background;
            document.body.style.color = ligth.color; // Adiciona o tema ligth  
            clicou = !clicou; // Altera o valor da variável auxiliar
        }


    })

};

meuEscopo(); // Chama nossa função principal.