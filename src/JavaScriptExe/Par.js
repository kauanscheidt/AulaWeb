let num = parseInt(prompt("Digite um número:"));

switch (num % 2) {
    case 0:
        console.log(num + " é PAR");
        break;
    case 1:
    case -1:
        console.log(num + " é ÍMPAR");
        break;
    default:
        console.log("Número inválido!");
}