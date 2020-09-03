import PubSub from 'pubsub-js'

export class Ship {
  constructor (length, x, y, direction = 'vertical') {
    this.length = length
    this.x = x
    this.y = y
    this.direction = direction
    this.body = []
    this.isSunk = false
  }

  hit (coordinates) {
    this.body.forEach((position, i, arr) => {
      if (position === coordinates) {
        arr[i] = 'x'
      }
    })
    this.hasBeenSunk()
  }

  hasBeenSunk () {
    if (this.body.every(position => position === 'x')) {
      this.isSunk = true

      PubSub.publishSync('the_ship_is_sunk') // SYNC!
    } else {
      this.isSunk = false
    }
  }
}
