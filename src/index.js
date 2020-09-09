import './style.css'
import { Player } from './components/Player'
import { Gameboard } from './components/Gameboard'
import { View } from './components/View'
import { Ship } from './components/Ship'
import PubSub from 'pubsub-js'

class Game {
  static init () {
    const player1 = new Player(new Gameboard('player1'), true, false)
    const player2 = new Player(new Gameboard('player2'), true, true) // Ai player
    player2.gameboard.initShips()

    View.init()

    /* When the first player places a ship onto the grid */
    PubSub.subscribe('got_ship_from_DOM', (msg, { coordinates, length, shipId }) => {
      const x = parseInt(coordinates[0])
      const y = parseInt(coordinates[1])
      player1
        .gameboard.createShipOnGameboard(new Ship(length, x, y, 'horizontal', shipId))
    })

    /* When the first player removes a ship from the grid */
    PubSub.subscribe('ship_deleted_from_DOM', (msg, shipId) => {
      // Write it and fix tests
      player1.gameboard.deleteShipFromGameboard(shipId)
    })

    PubSub.subscribe('clicked_btn_start_game', () => {
      this.initGame(player1, player2)
    })

    PubSub.subscribe('clicked_player2_grid', (msg, coordinates) => {
      player2.receiveDamage(coordinates, 'player2')
    })

    PubSub.subscribe('clicked_player1_grid', (msg, coordinates) => {
      player1.receiveDamage(coordinates, 'player1')
    })

    /* This is triggered when the second player is AI */
    PubSub.subscribe('make_turn_ai', (msg, coordinates) => {
      player1.receiveDamage(coordinates, 'player1')
    })

    PubSub.subscribe('no_alive_ships', (msg, player) => {
      this.gameOver(player)
    })
  }

  static initGame (player1, player2) {
    View.placeShips(player1, player2)
  }

  static gameOver (player) {
    if (player === 'player1') {
      alert('The game is over. Player 2 has won!')
    } else if (player === 'player2') {
      alert('The game is over. Player 1 has won!')
    }
  }
}
Game.init()
