// jugador = 0, pc = depende del caso que queramos
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function election(jugada) {
    let resultado = "";
    if (jugada == 1) {
    resultado = "Piedra 🪨";
    } else if (jugada == 2) {
    resultado = "Papel 🧻";
    } else if (jugada == 3) {
    resultado = "Tijera ✂️";
    } else {
    resultado = "Valor Inexistente";
    }
    return resultado
}

// variables de mi juego: 1 piedra, 2 papel, 3 tijera
let player = 0;
let pc = 0;
let triumphs = 0;
let losses = 0;

while (triumphs < 3 && losses < 3) {
    pc = aleatorio(1, 3);
    player = prompt(
    "You can choose between: 1 = stone, 2 = paper, 3 = scissors"
    );

    alert("Tu eliges: " + election(player))
    alert("PC elige: " + election(pc))

    // COMBATE
    if (player == pc) {
    alert(" Empate, hemos elegido la misma opción");
    } else if (
    (player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)
    ) {
    alert("Has ganado");
    triumphs = triumphs + 1
    } else {
    alert("Has perdido");
    losses = losses + 1
    }
}

alert("the player won " + triumphs + " times " + "and lost " + losses + " times")
