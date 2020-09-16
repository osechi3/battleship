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

    View.init(player1, player2)

    /* When a player places a ship onto the grid */
    PubSub.subscribe('got_ship_from_DOM', (msg, data) => {
      console.log(data)
      const x = parseInt(data.coordinates[0])
      const y = parseInt(data.coordinates[1])
      data.player.gameboard
        .createShipOnGameboard(
          new Ship(data.length, x, y, data.direction, data.shipId)
        )
    })

    /* Placing the function below after 'got_ship_from_DOM' event since it relies on this event */
    View.placeShipsOnGridRandomly(player2)

    /* When the first player removes a ship from the grid */
    PubSub.subscribe('ship_deleted_from_DOM', (msg, shipId) => {
      player1.gameboard.deleteShipFromGameboard(shipId)
    })

    PubSub.subscribe('clicked_btn_start_game', () => {
      this.initGame(player1, player2)
      View.displayElementsDOMOnStartGame()
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

    PubSub.subscribe('game_has_been_aborted', () => {
      this.gameOver()
    })
  }

  static initGame (player1, player2) {
    View.placeShips(player1)
    View.placeShips(player2)
  }

  static gameOver (player) {
    if (player === 'player1') {
      alert('The game is over. Player 2 has won!')
    } else if (player === 'player2') {
      alert('The game is over. Player 1 has won!')
    } else {
      alert('The game has been aborted.')
    }
  }
}
Game.init()
