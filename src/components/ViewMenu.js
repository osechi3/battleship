import PubSub from 'pubsub-js'
import { View } from './View'
import { Grid } from './ViewGrid'
import { ShipsDOM } from './ViewShips'
import { Validation } from './helpers/Validation'

export class Menu {
  static init (player1, player2) {
    /* Placement buttons */
    const buttonRandom = document.getElementById('button-random')
    buttonRandom.addEventListener('click', () => {
      View.resetShipPlacement(player1)
      Grid.placeShipsOnGridRandomly(player1)
      PubSub.publish('clicked_btn_start_game')
    })

    const buttonResetPlacement =
      document.getElementById('button-reset-placement')
    buttonResetPlacement.addEventListener('click', () => {
      View.resetShipPlacement(player1)
    })

    const buttonPlaceHorizontally =
      document.getElementById('button-horizontal-placing')
    buttonPlaceHorizontally.addEventListener('click', () => {
      if (buttonPlaceHorizontally.textContent === 'Horizontal') {
        buttonPlaceHorizontally.textContent = 'Vertical'
      } else {
        buttonPlaceHorizontally.textContent = 'Horizontal'
      }

      ShipsDOM.changeDisplayShipsInDOM()
    })

    /* A button that starts the game */
    const buttonStartGame = document.getElementById('btn-start-game')

    buttonStartGame.addEventListener('click', () => {
      if (Validation().checkShipsNotPlacedOnStartGame() === true &&
          Validation().checkInvalidPositionOnStartGame() === true) {
        PubSub.publish('clicked_btn_start_game')
      }
    })

    /* A button that aborts the game */
    const buttonAbortGame = document.getElementById('btn-abort-game')
    buttonAbortGame.style.display = 'none'

    buttonAbortGame.addEventListener('click', () => {
      if (buttonAbortGame.classList.contains('confirm')) {
        PubSub.publish('game_aborted')
        buttonAbortGame.textContent = 'Abort Game'
        buttonAbortGame.classList.remove('confirm')
      } else {
        buttonAbortGame.textContent = 'Are you sure?'
        buttonAbortGame.classList.add('confirm')

        setTimeout(() => {
          buttonAbortGame.classList.remove('confirm')
          buttonAbortGame.textContent = 'Abort Game'
        }, 4000)
      }
    })

    /* Play again button */
    const buttonPlayAgain = document.getElementById('btn-play-again')
    buttonPlayAgain.style.display = 'none'

    buttonPlayAgain.addEventListener('click', () => {
      PubSub.publish('game_reset')
    })

    /* A container for displaying the score of the game */
    const containerScore = document.getElementById('container-score')
    containerScore.style.display = 'none'

    const scoreTextPlayer1 = document.getElementById('score-text-player1')
    const scoreTextPlayer2 = document.getElementById('score-text-player2')

    // Populating score container every time a ship gets sunk
    PubSub.subscribe('ships_are_alive', (msg, { amount, player }) => {
      if (player === 'player1') {
        scoreTextPlayer1.textContent = amount + ':'
      } else if (player === 'player2') {
        scoreTextPlayer2.textContent = amount
      }
    })

    // Populating the score element with initial values
    PubSub.subscribe('clicked_btn_start_game', () => {
      scoreTextPlayer1.textContent = 10 + ':'
      scoreTextPlayer2.textContent = 10
    })

    /* Endgame message */
    const messageEndgame = document.getElementById('message-endgame')
    messageEndgame.style.display = 'none'
  }
}
