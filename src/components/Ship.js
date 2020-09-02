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
    this.body.forEach(position => {
      if (position === coordinates) {
        position = 'x'
      }
    })
  }
}
