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
  }

  isSunk () {
    if (this.body.every(position => position === 'x')) {
      this.isSunk = true
    } else {
      this.isSunk = false
    }
  }
}
