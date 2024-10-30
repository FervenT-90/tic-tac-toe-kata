import { TikTakToeGame } from "./main";

describe("TickTackToe should", () => {

  // empieza el jugador x
  // debe elegir una posicion del 1 al 9
  // la posicion elegida no debe estar cogida
  // se cambia de turno cuando el jugador actual elige una posicion valida
  // mientras esta jugando, el estatus es playing
  // si el jugador x completa una fila, gana
  // si el jugador o completa una columna, gana
  // si el jugador x completa una diagonal, gana
  // si no se cumple ninguna de las anteriores condiciones, quedan en empate
  
  it("Empieza el jugador x, eligiendo una posicion", () => {
    const tickTackToeGame = new TikTakToeGame()
    tickTackToeGame.play(5)
    const result = "1 | 2 | 3\n4 | x | 6\n7 | 8 | 9"
    expect(tickTackToeGame.getBoard()).toBe(result)
  });
});
