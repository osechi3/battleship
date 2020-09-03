import PubSub from 'pubsub-js'

export class Player {
  constructor (player = 'player', gameboard) {
    this.player = player
    this.gameboard = gameboard
  }

  makeTurn (x, y) {
    PubSub.publish('turn_is_made', {
      player: this.player,
      x: x,
      y: y
    })
  }
}