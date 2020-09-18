import { Validation } from './helpers/Validation'
import { View } from './View'

export class ShipsDOM {
  static init (player1, player2) {
    /* Ships */
    const shipsInput = document.querySelectorAll('.input-position')
    shipsInput.forEach(shipInput => {
      shipInput.addEventListener('input', () => {
        const shipLength =
          shipInput.parentElement.parentElement.id.match(/[0-9]/)[0]
        const elementClasses = document.getElementById('block-ships').classList

        if (!Validation().isPlacedIncorrectly(
          shipInput,
          shipLength,
          elementClasses
        )) {
          View.changeShipPositionOnGrid(
            shipInput,
            player1,
            elementClasses
          )
          shipInput.classList.remove('input-invalid')
        } else {
          shipInput.classList.add('input-invalid')
        }
      })
    })
  }

  static changeDisplayShipsInDOM () {
    const blockShips = document.getElementById('block-ships')
    const shipElements = document.querySelectorAll('.ship')

    if (blockShips.style.flexDirection === 'row') {
      blockShips.style.flexDirection = 'column'

      blockShips.classList.remove('vertical')
      blockShips.classList.add('horizontal')

      shipElements.forEach(element => {
        element.style.flexDirection = 'row'
      })
    } else {
      blockShips.style.flexDirection = 'row'

      blockShips.classList.remove('horizontal')
      blockShips.classList.add('vertical')

      shipElements.forEach(element => {
        element.style.flexDirection = 'column'
      })
    }
  }

  static resetInputFieldsPosition () {
    const inputFields = document.querySelectorAll('.input-position')

    for (const field of inputFields) {
      field.value = ''
    }
  }
}
