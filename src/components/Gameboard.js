// import { Ship } from './Ship'

export class Gameboard {
  constructor () {
    // this.gameboardX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // this.gameboardY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.aliveShips = []
    this.missedHitsCoordinated = []
  }

  createShip (ship) {
    if (ship.direction === 'vertical') {
      for (let i = 0; i < ship.length; i++) {
        ship.body.push(ship.x * 10 + (ship.y + i))
      }
    } else if (ship.direction === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        ship.body.push((ship.x + i) * 10 + ship.y)
      }
    }
    return ship
  }

  createShipOnGameboard (ship) {
    this.aliveShips.push(this.createShip(ship))
  }
}
