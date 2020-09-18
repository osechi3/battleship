export function Validation () {
  function isPlacedIncorrectly (shipInput, shipLength, elementClasses) {
    const direction = elementClasses[0]
    const gridPlayer1 = document.getElementById('grid-player1')
    const futureCoordinates =
      getFutureCoordinates(shipInput.value, shipLength, direction)

    /* Checking if a part of the ship is outside of the grid */
    const isIncorrectPosition = futureCoordinates.some(coordinate => {
      return coordinate.length > 2
    })

    if (isIncorrectPosition && shipInput.value.length > 1) {
      return true
    }

    /* Checking if the ship is placed onto another ship */
    return futureCoordinates.some(coordinate => {
      for (const child of gridPlayer1.children) {
        if (coordinate === child.textContent &&
            child.classList.contains('placed')) {
          return true
        }
      }
    })
  }

  function getFutureCoordinates (currentCoordinates, shipLength, direction) {
    const futureCoordinates = []
    let nextCoordinates

    for (let i = 0; i < shipLength; i++) {
      if (direction === 'horizontal') {
        nextCoordinates =
          (parseInt(currentCoordinates[0]) + i) + currentCoordinates[1]
      } else if (direction === 'vertical') {
        nextCoordinates =
          currentCoordinates[0] + (parseInt(currentCoordinates[1]) + i)
      } else {
        throw new Error('The direction of future coordinates is not defined')
      }
      futureCoordinates.push(nextCoordinates)
    }

    return futureCoordinates
  }

  function checkShipsNotPlacedOnStartGame () {
    const shipInputFields = document.querySelectorAll('.input-position')
    const containerError = document.querySelector('#error-start')

    for (const field of shipInputFields) {
      if (field.value.length < 2) {
        containerError.textContent = 'Please place all ships onto the grid.'
        containerError.classList.remove('hidden')
        return false
      }
    }

    containerError.classList.add('hidden')
    return true
  }

  function checkInvalidPositionOnStartGame () {
    const containerError = document.querySelector('#error-start')
    const inputsInvalid = document.querySelectorAll('.input-invalid')
    if (inputsInvalid.length < 1) {
      containerError.classList.add('hidden')
      return true
    } else {
      containerError.textContent =
        'You can\'t start the game when there are ships positioned incorrectly'
      containerError.classList.remove('hidden')
      return false
    }
  }

  return {
    isPlacedIncorrectly,
    checkShipsNotPlacedOnStartGame,
    checkInvalidPositionOnStartGame
  }
}
