import './style.css'
import { Player } from './components/Player'
import { Gameboard } from './components/Gameboard'
import { View } from './components/View'
import PubSub from 'pubsub-js'

class Game {
  static init () {
    const player1 = new Player(new Gameboard('player1'), true, false)
    const player2 = new Player(new Gameboard('player2'), true, true) // Ai player
    player1.gameboard.initShips()
    player2.gameboard.initShips()

    View.init()

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
