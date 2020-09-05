import './style.css'
import { Player } from './components/Player'
import { Gameboard } from './components/Gameboard'
import { View } from './components/View'
import PubSub from 'pubsub-js'

class Game {
  static init () {
    const player1 = new Player(new Gameboard())
    const player2 = new Player(new Gameboard())
    player1.gameboard.initShips()
    player2.gameboard.initShips()

    View.init()
    View.placeShips(player1, player2)

    PubSub.subscribe('clicked_player2_grid', (msg, { x, y }) => {
      player2.receiveDamage(x, y, 'player2')
    })

    PubSub.subscribe('clicked_player1_grid', (msg, { x, y }) => {
      player1.receiveDamage(x, y, 'player1')
    })
  }
}
Game.init()
