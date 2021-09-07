console.clear();

const GAME_OPTIONS = ["PIEDRA", "PAPEL", "TIJERA"];

/**
 * Función que ejecuta el juego de piedra, papel y tijera
 * @param player1 Opción del jugador1
 * @param player2 Opcion del jugador2
 */
function game(player1, player2) {
  if (!GAME_OPTIONS.includes(player1) | !GAME_OPTIONS.includes(player2))
    throw new Error("Opción de juego no válida");

  if (player1 === player2) return "Empate";

  switch (player1) {
    case "PIEDRA":
      switch (player2) {
        case "PAPEL":
          return "Player 2 gana";
        default:
          return "Player 1 gana";
      }
    case "PAPEL":
      switch (player2) {
        case "TIJERA":
          return "Player 2 gana";
        default:
          return "Player 1 gana";
      }
    case "TIJERA":
      switch (player2) {
        case "PIEDRA":
          return "Player 2 gana";
        default:
          return "Player 1 gana";
      }
  }
}

console.log(game("TIJERA", "PAPEL"));
