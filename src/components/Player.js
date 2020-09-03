import PubSub from 'pubsub-js'

export class Player {
  constructor (gameboard) {
    this.gameboard = gameboard
  }

  makeTurn (x, y) {
    PubSub.publish('turn_is_made', {
      x: x,
      y: y
    })
  }
}