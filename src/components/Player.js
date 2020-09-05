import PubSub from 'pubsub-js'

export class Player {
  constructor (gameboard, versusAi = false, isAi = false) {
    this.gameboard = gameboard
    this.previousCoordinates = []
    this.versusAi = versusAi
    this.isAi = isAi
  }

  receiveDamage (coordinates, player) {
    /* Checking if the received coordinates have been passed in before */
    const wasHit = this.previousCoordinates.some(prevCoordinates =>
      prevCoordinates === coordinates)

    if (wasHit) {
      console.log('You can\'t hit the same spot twice.')

      if (!this.isAi && this.versusAi) {
        this.makeTurnAi()
      }
    } else {
      this.gameboard.receiveAttack(coordinates, player)
      this.previousCoordinates.push(coordinates)
    }

    /* AI player makes a turn */
    if (this.isAi && this.versusAi) {
      this.makeTurnAi()
    }
  }

  makeTurnAi () {
    const coordinates =
        '' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)
    PubSub.publish('make_turn_ai', coordinates)
  }
}
