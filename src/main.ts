export class TikTakToeGame {

  private board:string[][]= [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
  ]
  
  public play(position:number):void {
    if (position < 1 || position > 9) {
      throw new Error('Number must be between 1 and 9');
    }
    const row = Math.floor((position - 1) / 3);
    const col = (position - 1) % 3;

    this.board[row][col] = "x"
  }

  public getBoard():string {
    let msg = ""
    this.board.forEach((row) => {
      console.log({row})

      row.forEach((field, index) => {
        console.log({index})
        if (index !== 0) {
          msg += ` ${field} |`
        } else {
          msg += `${field} |`
        }
      })
      msg = msg.slice(0, msg.length -2)
      msg+= "\n"
      
    })
    msg = msg.slice(0, msg.length -1)
    return msg
  }

  public getStatus():string {
    return ""
  }
}
