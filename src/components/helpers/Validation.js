import PubSub from 'pubsub-js'

export function Validation () {
  function checkIfSameAsSiblingElements (shipInput, shipLength, elementClasses) {
    const direction = elementClasses[0]
    const gridPlayer1 = document.getElementById('grid-player1')
    const futureCoordinates =
      getFutureCoordinates(shipInput.value, shipLength, direction)

    console.log(futureCoordinates)
    console.log(shipInput.value)

    const isIncorrectPosition = futureCoordinates.some(coordinate => {
      console.log(coordinate.length)
      return coordinate.length > 2
    })

    if (isIncorrectPosition && shipInput.value.length > 1) {
      return true
    }

    return futureCoordinates.some(coordinate => {
      for (const child of gridPlayer1.children) {
        if (coordinate === child.textContent &&
            child.classList.contains('placed')) {
          console.log('Nope')
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

  function checkIfPositionAllowed (element, itemId) {
    /* When placing vertically */
    if (element === undefined) {
      alertUserInvalidPosition(element)
      return false
    }

    /* When placing horizontally */
    if (element.textContent === '') {
      console.log('Not Allowed')
      element.id = itemId
      alertUserInvalidPosition(element)
      return false
    } else {
      return true
    }
  }

  function alertUserInvalidPosition (element) {
    PubSub.publish('invalid_position', element)
  }

  /* When there is invalid input an id is set to a hidden
  element. When the user fixes the input the hidden element is found
  through that id. If previous siblings of the element are not
  there (hence the user changed their position) the input is
  considered correct -- 'input-invalid' class is removed from the
  input and the id is removed from the hidden element */
  function checkInvalidPositionDynamically (element, elementId, direction) {
    const currentInputField = document.querySelector(`#${elementId} input`)
    if (direction === 'horizontal') {
      if (element.previousElementSibling.id) {
        console.log(elementId)
        currentInputField.classList.add('input-invalid')
      } else {
        currentInputField.classList.remove('input-invalid')
        element.removeAttribute('id', elementId)
      }
    } else if (direction === 'vertical') {
      if (!element) {
        currentInputField.classList.add('input-invalid')
      } else {
        currentInputField.classList.remove('input-invalid')
      }
    } else {
      throw new Error('The direction is undefined')
    }
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
    checkIfSameAsSiblingElements,
    checkIfPositionAllowed,
    checkInvalidPositionDynamically,
    checkShipsNotPlacedOnStartGame,
    checkInvalidPositionOnStartGame
  }
}
