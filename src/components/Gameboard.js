import PubSub from 'pubsub-js'
import { Ship } from './Ship'

export class Gameboard {
  constructor () {
    // this.gameboardX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // this.gameboardY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.aliveShips = []
    this.missedHitsCoordinates = []

    PubSub.subscribe('the_ship_is_sunk', () => {
      const index = this.aliveShips.findIndex(ship => {
        if (ship.isSunk === true) {
          return ship
        }
      })
      if (index !== -1) {
        this.aliveShips.splice(index, 1)
        this.areShipsAlive()
      }
    })

    PubSub.subscribe('turn_is_made', (msg, { x, y }) => {
      this.receiveAttack(x, y)
    })
  }

  createShip (ship) {
    if (ship.direction === 'vertical') {
      for (let i = 0; i < ship.length; i++) {
        ship.body.push('' + ship.x + (ship.y + i))
      }
    } else if (ship.direction === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        ship.body.push('' + (ship.x + i) + ship.y)
      }
    }
    return ship
  }

  createShipOnGameboard (ship) {
    this.aliveShips.push(this.createShip(ship))
  }

  receiveAttack (x, y) {
    const coordinates = '' + x + y

    const isHit = this.aliveShips.some(ship => {
      return ship.body.some(position => position === coordinates)
    })

    if (isHit) {
      this.aliveShips.forEach(ship => {
        ship.hit(coordinates)
      })
    } else {
      this.missedHitsCoordinates.push(coordinates)
    }
  }

  areShipsAlive () {
    if (this.aliveShips.length > 0) {
      console.log('There are still ships on the gameboard')
      return true
    } else {
      console.log('There are no ships left')
      return false
    }
  }

  initShips () {
    this.createShipOnGameboard(new Ship(1, 1, 0, 'horizontal'))
    this.createShipOnGameboard(new Ship(2, 2, 3, 'vertical'))
    this.createShipOnGameboard(new Ship(3, 5, 3, 'horizontal'))
    this.createShipOnGameboard(new Ship(4, 8, 3, 'vertical'))
    console.log(this.aliveShips)
  }
}
