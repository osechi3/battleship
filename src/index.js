import './style.css'
import { Player } from './components/Player'
import { Gameboard } from './components/Gameboard'
import { View } from './components/View'
import PubSub from 'pubsub-js'

class Game {
  static init () {
    const player1 = new Player(new Gameboard(), true, false)
    const player2 = new Player(new Gameboard(), true, true) // Ai player
    player1.gameboard.initShips()
    player2.gameboard.initShips()

    View.init()
    View.placeShips(player1, player2)

    PubSub.subscribe('clicked_player2_grid', (msg, coordinates) => {
      player2.receiveDamage(coordinates, 'player2')
    })

    PubSub.subscribe('clicked_player1_grid', (msg, coordinates) => {
      player1.receiveDamage(coordinates, 'player1')
    })

    PubSub.subscribe('make_turn_ai', (msg, coordinates) => {
      player1.receiveDamage(coordinates, 'player1')
    })
  }
}
Game.init()
