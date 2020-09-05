
export class Player {
  constructor (gameboard) {
    this.gameboard = gameboard
    this.previousCoordinates = []
  }

  receiveDamage (coordinates, player) {
    /* Checking if the received coordinates have been passed in before */
    const wasHit = this.previousCoordinates.some(prevCoordinates =>
      prevCoordinates === coordinates)

    if (wasHit) {
      console.log('You can\'t hit the same spot twice.')
    } else {
      this.gameboard.receiveAttack(coordinates, player)
      this.previousCoordinates.push(coordinates)
    }
  }
}
