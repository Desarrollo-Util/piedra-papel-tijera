console.clear();

const GAME_OPTIONS = ["PIEDRA", "PAPEL", "TIJERA"];

const GAME_RULES = {
  PIEDRA: {
    TIJERA: true,
  },
  PAPEL: {
    PIEDRA: true,
  },
  TIJERA: {
    PAPEL: true,
  },
};

/**
 * Función que ejecuta el juego de piedra, papel y tijera
 * @param player1 Opción del jugador1
 * @param player2 Opcion del jugador2
 */
function game(player1, player2) {
  if (!GAME_OPTIONS.includes(player1) | !GAME_OPTIONS.includes(player2))
    throw new Error("Opción de juego no válida");

  if (player1 === player2) return "Empate";

  if (GAME_RULES[player1][player2]) return "Player1 gana";
  return "Player2 gana";
}

console.log(game("PAPEL", "PIEDRA"));
