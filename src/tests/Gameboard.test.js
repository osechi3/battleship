import { Gameboard } from '../components/Gameboard'
import { Ship } from '../components/Ship'

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
