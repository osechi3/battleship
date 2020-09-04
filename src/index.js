import './style.css'
import { Player } from './components/Player'
import { Gameboard } from './components/Gameboard'
import { View } from './components/View'

class Game {
  static init () {
    const player1 = new Player(new Gameboard())
    const player2 = new Player(new Gameboard())
    player1.gameboard.initShips()
    player2.gameboard.initShips()

    View.init()
    View.placeShips(player1, player2)
  }
}
Game.init()
