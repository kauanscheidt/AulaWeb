let idades = [];
for (let i = 0; i < 10; i++) {
    idades.push(Number(prompt(`Digite a idade ${i + 1}:`)));
}

console.log(idades);
console.log([...idades].sort((a, b) => a - b));
console.log([...idades].sort((a, b) => b - a));

let fila = [];
for (let i = 0; i < 5; i++) {
    let id = prompt(`Funcionário ${i + 1} - ID:`);
    let nome = prompt(`Funcionário ${i + 1} - Nome:`);
    let salario = Number(prompt(`Funcionário ${i + 1} - Salário:`));
    let idade = Number(prompt(`Funcionário ${i + 1} - Idade:`));
    fila.push({ id, nome, salario, idade });
}

console.table(fila);

let maisNovo = fila.reduce((a, b) => a.idade < b.idade ? a : b);
let maiorSalario = fila.reduce((a, b) => a.salario > b.salario ? a : b);
console.log(maisNovo.nome);
console.log(maiorSalario.idade);