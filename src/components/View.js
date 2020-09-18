import PubSub from 'pubsub-js'
import { Menu } from './ViewMenu'
import { ShipsDOM } from './ViewShips'
import { Grid } from './ViewGrid'

export class View {
  static init (player1, player2) {
    Menu.init(player1, player2)
    ShipsDOM.init(player1, player2)
    Grid.init()

    /* Resetting input fields */
    ShipsDOM.resetInputFieldsPosition()
  }

  static resetShipPlacement (player) {
    const inputFields = document.querySelectorAll('.input-position')
    const gridPlayer1 =
      document.getElementById(`grid-${player.gameboard.player}`)

    inputFields.forEach(field => {
      field.value = ''
    })

    for (const child of gridPlayer1.children) {
      if (child.classList.contains('cover')) continue
      child.removeAttribute('id')
      child.classList.remove('placed')
      child.classList.remove('created')
      child.classList.remove('horizontal')
      child.classList.remove('vertical')

      // Delete it
      child.style.cssText = ''
    }

    player.gameboard.aliveShips = []
  }

  static getShipFromDOM (player, direction) {
    const ship = []
    let shipId = ''
    const gridPlayer1 = document.getElementById('grid-player1')
    for (const child of gridPlayer1.children) {
      if (child.classList.contains('placed') &&
        !child.classList.contains('created')) {
        shipId = child.id
        child.classList.add('created')
        ship.push(child.textContent)
      }
    }

    PubSub.publish('got_ship_from_DOM', {
      coordinates: ship[0],
      length: ship.length,
      shipId,
      player,
      direction
    })
  }

  static placeShips (player) {
    const shipsPlayer = player.gameboard.aliveShips
    const gridPlayer =
      document.getElementById(`grid-${player.gameboard.player}`)

    shipsPlayer.forEach(ship => {
      ship.body.forEach(position => {
        for (let item = 0; item < 110; item++) {
          gridPlayer.childNodes[item].style.outline = 'none'

          if (position === gridPlayer.childNodes[item].textContent) {
            if (player.gameboard.player === 'player1') {
              gridPlayer.childNodes[item].style.backgroundColor = '#555b6e'
            } else {
              gridPlayer.childNodes[item].style.backgroundColor = '#89b0ae'
              gridPlayer.childNodes[item].style.border = 'none'
              gridPlayer.childNodes[item].style.borderRadius = '0'
            }
          }
        }
      })
    })
  }

  static resetGameDOM (player1, player2) {
    const gridPlayer2 = document.getElementById('grid-player2')
    gridPlayer2.removeEventListener('click', Grid.enableClickingGridOpponent)

    this.displayElementsDOM('before-start')

    this.resetShipPlacement(player1)
    this.resetShipPlacement(player2)
  }

  static displayElementsDOM (stage) {
    const blockButtons = document.getElementById('block-buttons')
    const blockShips = document.getElementById('block-ships')
    const buttonStart = document.getElementById('btn-start-game')
    const containerScore = document.getElementById('container-score')
    const gridPlayer2 = document.getElementById('grid-player2')
    const namePlayer2 = document.getElementById('block-name2')
    const buttonAbortGame = document.getElementById('btn-abort-game')
    const buttonPlayAgain = document.getElementById('btn-play-again')
    const messageEndgame = document.getElementById('message-endgame')
    const coverPlayer1 = document.getElementById('cover-player1')
    const coverPlayer2 = document.getElementById('cover-player2')

    if (stage === 'before-start') {
      // Hiding
      messageEndgame.style.display = 'none'
      coverPlayer1.style.display = 'none'
      gridPlayer2.style.display = 'none'
      namePlayer2.style.display = 'none'
      buttonPlayAgain.style.display = 'none'
      containerScore.style.display = 'none'

      // Showing
      blockButtons.style.display = ''
      blockShips.style.display = ''
      buttonStart.style.display = ''
    } else if (stage === 'start') {
      // Hiding
      blockButtons.style.display = 'none'
      blockShips.style.display = 'none'
      buttonStart.style.display = 'none'
      coverPlayer2.style.display = 'none'

      // Showing
      containerScore.style.display = ''
      gridPlayer2.style.display = ''
      namePlayer2.style.display = ''
      buttonAbortGame.style.display = ''
      coverPlayer1.style.display = ''
    } else if (stage === 'over') {
      // Hiding
      buttonAbortGame.style.display = 'none'

      // Showing
      messageEndgame.style.display = ''
      buttonPlayAgain.style.display = ''
      coverPlayer2.style.display = ''
    }
  }
}
