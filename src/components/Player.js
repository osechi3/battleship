import PubSub from 'pubsub-js'

export class Player {
  constructor (gameboard, versusAi = false, isAi = false) {
    this.gameboard = gameboard
    this.previousCoordinates = []
    this.versusAi = versusAi
    this.isAi = isAi
    this.aiSuccessfulHits = []
    /* 'ship_is_sunk' event fires earlier that 'ai_successful_hit',
      which is not desired */
    this.isSunk = false

    PubSub.subscribe('ai_successful_hit', (msg, coordinates) => {
      this.aiSuccessfulHits.push(coordinates)
      console.log(this.aiSuccessfulHits)

      if (this.isSunk) {
        this.aiSuccessfulHits = []
        console.log(this.aiSuccessfulHits)
      }
      this.isSunk = false
    })

    PubSub.subscribe('ship_is_sunk', () => {
      this.isSunk = true
    })
  }

  receiveDamage (coordinates, player) {
    /* Checking if the received coordinates have been passed in before */
    const wasHit = this.previousCoordinates.some(prevCoordinates =>
      prevCoordinates === coordinates)

    /* If the player clicks on the same spot multiple times */
    if (wasHit && this.isAi) {
      console.log('You can\'t hit the same spot twice.')
    /* If AI clicks on the same spot multiple times */
    } else if (wasHit && !this.isAi) {
      console.log('You can\'t hit the same spot twice.')
      this.makeTurnAi()
    } else {
      this.gameboard.receiveAttack(coordinates, player)
      this.previousCoordinates.push(coordinates)

      /* AI player makes a turn */
      if (this.isAi && this.versusAi) {
        this.makeTurnAi()
      }
    }
  }

  makeTurnAi () {
    let coordinates =
        '' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)

    const numRandom1 = Math.floor(Math.random() * 3)
    const numRandom2 = Math.floor(Math.random() * 3)
    const numRandom3 = Math.floor(Math.random() * this.aiSuccessfulHits.length)
    const oneOrTen = numRandom1 > 1 ? 10 : 1

    /* Having AI try adjacent coordinates */
    if (this.aiSuccessfulHits.length >= 1) {
      if (numRandom2 > 1) {
        coordinates = parseInt(this.aiSuccessfulHits[numRandom3]) + oneOrTen + ''
      } else {
        coordinates = parseInt(this.aiSuccessfulHits[numRandom3]) - oneOrTen + ''
      }
    }

    /* Checking if AI makes a turn outside of the grid */
    if (parseInt(coordinates) < 0) {
      coordinates =
        '' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)
    }

    // Add 0 to coordinates when there is one-digit number
    if (coordinates.length < 2) {
      coordinates = 0 + coordinates
      console.log(coordinates)
    }

    PubSub.publish('make_turn_ai', coordinates)
  }
}
