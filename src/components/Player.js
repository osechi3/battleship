import PubSub from 'pubsub-js'

export class Player {
  constructor (gameboard, player = 'player') {
    this.gameboard = gameboard

    if (player === 'ai') {
      this.receiveDamageFromPlayer = (x, y) => {
        PubSub.publish('turn_is_made', {
          x: x,
          y: y
        })
      }
    } else if (player === 'player') {
      this.madeTurns = []

      this.receiveDamageFromAi = () => {
        const x = Math.floor(Math.random() * 10)
        const y = Math.floor(Math.random() * 10)

        PubSub.publish('turn_is_made', {
          x: x,
          y: y
        })
        console.log(x, y)
      }
    }
  }
}
