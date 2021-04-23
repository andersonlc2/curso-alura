let nome, sobrenome, salario, bonus, conf;

nome = window.prompt("Enter your first name: ");
sobrenome = window.prompt("Enter your last name: ");

salario = window.prompt("Enter you wage: ");
conf = confirm("Enter 'OK' if calculator your bonus.")

if (conf){
    bonus = window.prompt("Enter yout bônus: ");
}else {
    bonus = null;
}

alert(`Name: ${nome} ${sobrenome}
Wage comp: $${Number(salario) + Number(bonus)}`);

// confirm , prompt, alert === IMPORTANTES.