import { Gameboard } from '../components/Gameboard'
import { Ship } from '../components/Ship'

describe('Creating new ships on the gameboard with createShip function',
  () => {
    test('The function creates a new ship object correctly', () => {
      const newGameboard = new Gameboard()
      expect(newGameboard.createShip(new Ship(3, 1, 0, 'vertical')))
        .toEqual({
          length: 3,
          x: 1,
          y: 0,
          direction: 'vertical',
          body: [10, 11, 12],
          isSunk: false
        })
    })

    test('The function takes other coordinates', () => {
      const newGameboard = new Gameboard()
      expect(newGameboard.createShip(new Ship(2, 5, 2, 'vertical')))
        .toEqual({
          length: 2,
          x: 5,
          y: 2,
          direction: 'vertical',
          body: [52, 53],
          isSunk: false
        })
    })

    test('The function places ships horizontally', () => {
      const newGameboard = new Gameboard()
      expect(newGameboard.createShip(new Ship(2, 5, 2, 'horizontal')))
        .toEqual({
          length: 2,
          x: 5,
          y: 2,
          direction: 'horizontal',
          body: [52, 62],
          isSunk: false
        })
    })

    test('The function takes other values and places ships horizontally', () => {
      const newGameboard = new Gameboard()
      expect(newGameboard.createShip(new Ship(4, 2, 3, 'horizontal')))
        .toEqual({
          length: 4,
          x: 2,
          y: 3,
          direction: 'horizontal',
          body: [23, 33, 43, 53],
          isSunk: false
        })
    })

    /* Check for a blank input and a blank array */
  })

describe(`receiveAttack function takes a pair of coordinates and checks
  whether there is a ship on those coordinates. When there is one
  it executes hit function, if none is found then
  the coordinates are sent to the corresponding array`, () => {
  test(`receiveAttack function changes the element in a ship's body
  (If provided coordinates match with the ones in the body of a ship)`, () => {
    const newGameboard = new Gameboard()
    newGameboard.createShipOnGameboard(new Ship(4, 2, 3, 'horizontal'))
    newGameboard.receiveAttack(2, 3)
    expect(newGameboard.aliveShips[0].body[0]).toBe('x')
    expect(newGameboard.missedHitsCoordinates.length).toBe(0)
  })

  test(`In case provided coordinates do NOT match the ones of a ship,
  the function sends coordinates into missedHitsCoordinates array`, () => {
    const newGameboard = new Gameboard()
    newGameboard.createShipOnGameboard(new Ship(4, 2, 3, 'horizontal'))
    newGameboard.receiveAttack(7, 7)
    expect(newGameboard.aliveShips[0].body[0]).toBe(23)
    expect(newGameboard.missedHitsCoordinates.length).toBe(1)
  })

  test('The function works when there is more than one ship', () => {
    const newGameboard = new Gameboard()
    newGameboard.createShipOnGameboard(new Ship(4, 2, 3, 'horizontal'))
    newGameboard.createShipOnGameboard(new Ship(4, 5, 5, 'horizontal'))
    newGameboard.receiveAttack(6, 5)
    expect(newGameboard.aliveShips[1].body[1]).toBe('x')
    expect(newGameboard.missedHitsCoordinates.length).toBe(0)
  })
})
