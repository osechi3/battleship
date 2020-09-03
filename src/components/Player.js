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
        const coordinates = '' + x + y

        if (!this.madeTurns.includes(coordinates)) {
          this.madeTurns.push(coordinates)
          PubSub.publish('turn_is_made', {
            x: x,
            y: y
          })
        } else {
          this.receiveDamageFromAi(1, 1)
        }
      }
    }
  }
}
