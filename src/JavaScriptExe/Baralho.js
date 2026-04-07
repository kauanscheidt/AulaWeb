let posicao = parseInt(prompt("Digite a posição da carta (1-52):"));
let jogador;

switch (posicao % 4) {
    case 1: jogador = "Jogador 1"; break;
    case 2: jogador = "Jogador 2"; break;
    case 3: jogador = "Jogador 3"; break;
    case 0: jogador = "Jogador 4"; break;
    default: jogador = "Posição inválida!";
}

console.log("Carta " + posicao + " → " + jogador);