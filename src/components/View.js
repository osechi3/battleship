import PubSub from 'pubsub-js'

export class View {
  static init (player1, player2) {
    const blockMain = document.getElementById('block-main')

    /* Placement buttons */
    const buttonRandom = document.getElementById('button-random')
    buttonRandom.addEventListener('click', () => {
      this.resetShipPlacement(player1)
      this.placeShipsOnGridRandomly(player1)
      PubSub.publish('clicked_btn_start_game')
    })

    const buttonResetPlacement =
      document.getElementById('button-reset-placement')
    buttonResetPlacement.addEventListener('click', () => {
      this.resetShipPlacement(player1)
    })

    /* Ships */
    const shipsInput = document.querySelectorAll('.input-position')
    shipsInput.forEach((shipInput, i, arr) => {
      shipInput.addEventListener('input', () => {
        if (!this.checkIfSameAsSiblingElements(shipInput, arr)) {
          this.changeShipPositionOnGrid(shipInput, player1)
          shipInput.classList.remove('input-invalid')
        } else {
          shipInput.classList.add('input-invalid')
        }
      })

      PubSub.subscribe('invalid_position', (msg, { element, elementId }) => {
        this.checkInvalidPositionDynamically(element, elementId)
      })
    })

    /* Grid */
    this.initGrid(blockMain)

    /* Div that doesn't let a player make a turn before
    the other player do so */
    PubSub.subscribe('clicked_btn_start_game', () => {
      const gridPlayer1 = document.getElementById('grid-player1')
      const gridPlayer2 = document.getElementById('grid-player2')

      const coverChangingTurnsPlayer1 =
        this.createElement('div', 'cover', 'cover-player1', gridPlayer1)
      const coverChangingTurnsPlayer2 =
        this.createElement('div', 'cover', 'cover-player2', gridPlayer2)

      /* Letting Player 1 go first */
      coverChangingTurnsPlayer1.style.display = 'initial'

      gridPlayer1.append(coverChangingTurnsPlayer1)
      gridPlayer2.append(coverChangingTurnsPlayer2)
    })

    /* A button that starts the game */
    const blockGrid2 = document.getElementById('block-grid2')
    const blockStartGame = this.createElement('div', null, 'block-start-game')
    blockMain.insertBefore(blockStartGame, blockGrid2)

    const buttonStartGame =
      this.createElement('button', 'btn', 'btn-start-game', blockStartGame)
    buttonStartGame.type = 'button'
    buttonStartGame.textContent = 'Start Game'

    buttonStartGame.addEventListener('click', () => {
      if (this.checkShipsNotPlacedOnStartGame() === true &&
          this.checkInvalidPositionOnStartGame() === true) {
        PubSub.publish('clicked_btn_start_game')
      }
    })

    /* A container for error messages pertaining the start of the game */
    this.createElement('div', 'error hidden', 'error-start', blockStartGame)

    /* Resetting input fields */
    this.resetInputFieldsPosition()
  }

  static initGrid (rootElement) {
    const blockGridPlayer1 =
      this.createElement('div', 'block-grid', 'block-grid1', rootElement)

    const blockGridPlayer2 =
      this.createElement('div', 'block-grid', 'block-grid2', rootElement)

    /* Players' names */
    const namePlayer1 =
      this.createElement('p', 'name', 'block-name1', blockGridPlayer1)
    namePlayer1.textContent = 'Player 1'

    const namePlayer2 =
      this.createElement('p', 'name', 'block-name2', blockGridPlayer2)
    namePlayer2.textContent = 'Computer'

    /* Grid */
    const gridPlayer1 =
      this.createElement('div', 'grid', 'grid-player1', blockGridPlayer1)
    const gridPlayer2 =
      this.createElement('div', 'grid', 'grid-player2', blockGridPlayer2)

    /* Grid items of the first player */
    for (let item = 0; item < 100; item++) {
      /* Adding a hidden element to check for
      incorrect horizontal positioning */
      if (item !== 0 && item % 10 === 0) {
        this.createElement('div', 'hidden-item', null, gridPlayer1)
      }

      const gridItem =
        this.createElement('div', 'grid-item', null, gridPlayer1)

      // Adding a hidden element to the end of the grid
      if (item === 99) {
        this.createElement('div', 'hidden-item', null, gridPlayer1)
      }

      /* Adjusting numbers in divs and casting numbers to strings */
      if (item >= 10) {
        gridItem.textContent = item.toString().split('').reverse().join('')
      } else {
        gridItem.textContent = '' + item + 0
      }
    }

    /* Grid items of the second player */
    for (let item = 0; item < 100; item++) {
      /* Adding a hidden element to check for
      incorrect horizontal positioning */
      if (item !== 0 && item % 10 === 0) {
        this.createElement('div', 'hidden-item', null, gridPlayer2)
      }

      const gridItem =
        this.createElement('div', 'grid-item', null, gridPlayer2)

      // Adding a hidden element to the end of the grid
      if (item === 99) {
        this.createElement('div', 'hidden-item', null, gridPlayer2)
      }

      /* Adjusting numbers in divs and casting numbers to strings */
      if (item >= 10) {
        gridItem.textContent = item.toString().split('').reverse().join('')
      } else {
        gridItem.textContent = '' + item + 0
      }
    }

    /* Event listeners */
    PubSub.subscribe('clicked_btn_start_game', () => {
      gridPlayer2.addEventListener('click', (e) => {
        if (e.target.textContent) {
          console.log(e.target.textContent)
          PubSub.publish('clicked_player2_grid', e.target.textContent)
        }
      })

      gridPlayer1.addEventListener('click', (e) => {
        if (e.target.textContent) {
          console.log(e.target.textContent)
          PubSub.publish('clicked_player1_grid', e.target.textContent)
        }
      })
    })

    /* Update grids and change turns after a player has made their turn */
    PubSub.subscribe('attack_is_executed', (msg, data) => {
      this.updateGridPlayer(data.coordinates, data.missedHits, data.player)
      this.changeTurns(data.player)
    })
  }

  static resetShipPlacement (player) {
    const inputFields = document.querySelectorAll('.input-position')
    const gridPlayer1 = document.getElementById('grid-player1')

    inputFields.forEach(field => {
      field.value = ''
    })

    for (const child of gridPlayer1.children) {
      child.removeAttribute('id')
      child.classList.remove('placed')
      child.classList.remove('created')
    }

    player.gameboard.aliveShips = []
  }

  static changeShipPositionOnGrid (shipInput, player) {
    const gridPlayer1 = document.getElementById('grid-player1')
    const shipLength = shipInput.parentElement.parentElement.children.length
    const shipId = shipInput.parentElement.parentElement.id

    if (shipInput.value !== '') {
      for (const item of gridPlayer1.children) {
        if (shipId === item.id) {
          this.styleItemsDynamically(item, shipLength, 'created', shipId, 'remove')
          this.styleItemsDynamically(item, shipLength, 'placed', shipId, 'remove')

          PubSub.publish('ship_deleted_from_DOM', shipId)
        }
      }

      for (const item of gridPlayer1.children) {
        if (shipInput.value === item.textContent) {
          this.styleItemsDynamically(item, shipLength, 'placed', shipId, 'add')
          this.getShipFromDOM(player)
        }
      }
    }
  }

  static placeShipsOnGridRandomly (player) {
    const gridPlayer =
      document.getElementById(`grid-${player.gameboard.player}`)
    const oldCoordinates = []

    for (let i = 1; i <= 10; i++) {
      let coordinates = 0
      let length = 0

      if (i <= 4) {
        length = 1
      } else if (i <= 7) {
        length = 2
      } else if (i <= 9) {
        length = 3
      } else if (i === 10) {
        length = 4
      }

      coordinates = this.getRandomNumber(length, oldCoordinates)

      /* Adding new coordinates into an array of used coordinates */
      for (let increment = 0; increment < length; increment++) {
        oldCoordinates.push(coordinates + (increment * 10))
      }

      const shipId = `ship${length}-${i}`

      /* Casting to a string to search for in the DOM */
      if (coordinates < 10) {
        coordinates = 0 + (coordinates + '')
      } else {
        coordinates += ''
      }

      /* Positioning ships on the grid  */
      for (const child of gridPlayer.children) {
        if (child.textContent === coordinates) {
          this.styleItemsDynamically(child, length, 'placed', shipId, 'add')
        }
      }

      /* Adding the ships on the grid into aliveShips array */
      PubSub.publish('got_ship_from_DOM', {
        coordinates,
        length,
        shipId,
        player
      })
    }
    console.log(oldCoordinates)
  }

  static getRandomNumber (length, oldCoordinates, iteration = 0) {
    /* Stopping the function after 99th iteration If there is an error */
    if (iteration > 100) {
      throw new Error('Too much recursion')
    }
    iteration++

    let numberRandom = Math.floor(Math.random() * 100)

    /* Checking if there is the random number in the array of used coordinates
    and also checking for future values */
    let isOccupied
    for (let i = 1; i <= length; i++) {
      if (oldCoordinates.includes(numberRandom + (i * 10 - 10))) {
        isOccupied = true
        numberRandom = this.getRandomNumber(length, oldCoordinates, iteration)
        break
      } else {
        isOccupied = false
      }
    }

    /* Checking if the value can NOT be placed onto the grid */
    if (numberRandom + (length * 10 - 10) >= 100 && length !== 1) {
      console.log('Too big of a number: ' + numberRandom)
      numberRandom = this.getRandomNumber(length, oldCoordinates, iteration)
      console.log('New number: ' + numberRandom)
      return numberRandom
    } else if (isOccupied === true) {
      numberRandom = this.getRandomNumber(length, oldCoordinates, iteration)
      return numberRandom
      // console.log('There was such a number: ' + numberRandom)
    } else {
      return numberRandom
    }
  }

  static styleItemsDynamically (element, amount, className, itemId, addOrRemove) {
    if (!element) return
    if (!this.checkIfPositionAllowed(element, itemId)) return
    if (addOrRemove === 'add') {
      element.classList.add(className)
      element.id = itemId
    } else if (addOrRemove === 'remove') {
      element.classList.remove(className)
      element.removeAttribute('id', itemId)
    }
    if (amount === 1) return

    return this.styleItemsDynamically(
      element.nextElementSibling, amount - 1, className, itemId, addOrRemove
    )
  }

  static checkIfSameAsSiblingElements (shipInput, arr) {
    const gridPlayer1 = document.getElementById('grid-player1')

    for (const child of gridPlayer1.children) {
      if (shipInput.value === child.textContent &&
          child.classList.contains('placed')) {
        console.log('Nope')
        return true
      }
    }
  }

  static checkIfPositionAllowed (element, itemId) {
    if (element.textContent === '') {
      console.log('Not Allowed')
      element.id = itemId
      this.alertUserInvalidPosition(element)
      return false
    } else {
      return true
    }
  }

  /* When there is invalid input an id is set to the hidden
  element. When the user fixes the input hidden element is found
  through thatid. If previous siblings of the element are not
  there (hence the user changed their position) the input is
  considered correct -- 'input-invalid' class is removed from the
  input and the id is removed from the hidden element */
  static checkInvalidPositionDynamically (element, elementId) {
    const currentInputField = document.querySelector(`#${elementId} input`)
    if (element.previousElementSibling.id) {
      console.log(elementId)
      currentInputField.classList.add('input-invalid')
    } else {
      currentInputField.classList.remove('input-invalid')
      element.removeAttribute('id', elementId)
    }
  }

  static checkShipsNotPlacedOnStartGame () {
    const shipInputFields = document.querySelectorAll('.input-position')
    const containerError = document.querySelector('#error-start')

    for (const field of shipInputFields) {
      if (field.value === '') {
        containerError.textContent = 'Please place all ships onto the grid.'
        containerError.classList.remove('hidden')
        return false
      }
    }

    containerError.classList.add('hidden')
    return true
  }

  static checkInvalidPositionOnStartGame () {
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

  static alertUserInvalidPosition (element) {
    PubSub.publish('invalid_position', {
      element,
      elementId: element.id
    })
  }

  static getShipFromDOM (player) {
    const ship = []
    let shipId = ''
    const gridPlayer1 = document.getElementById('grid-player1')
    for (const child of gridPlayer1.children) {
      if (child.classList.contains('placed') &&
        !child.classList.contains('created')) {
        console.log(child.textContent)

        shipId = child.id
        child.classList.add('created')
        ship.push(child.textContent)
      }
    }

    PubSub.publish('got_ship_from_DOM', {
      coordinates: ship[0],
      length: ship.length,
      shipId,
      player
    })
  }

  static placeShips (player) {
    const shipsPlayer = player.gameboard.aliveShips
    const gridPlayer =
      document.getElementById(`grid-${player.gameboard.player}`)

    shipsPlayer.forEach(ship => {
      ship.body.forEach(position => {
        for (let item = 0; item < 110; item++) {
          if (position === gridPlayer.childNodes[item].textContent) {
            gridPlayer.childNodes[item].style.backgroundColor = 'red'
          }
        }
      })
    })
  }

  static updateGridPlayer (coordinates, missedHits, player) {
    const gridPlayer = document.getElementById(`grid-${player}`)
    const isMissed = missedHits.some(hit => coordinates === hit)
    console.log(isMissed)

    for (let item = 0; item < 100; item++) {
      if (gridPlayer.childNodes[item].textContent === coordinates) {
        if (isMissed) {
          gridPlayer.childNodes[item].style.backgroundColor = 'lightblue'
        } else {
          gridPlayer.childNodes[item].style.backgroundColor = 'yellow'
        }
      }
    }
  }

  static changeTurns (player) {
    const coverPlayer1 = document.getElementById('cover-player1')
    const coverPlayer2 = document.getElementById('cover-player2')

    if (player === 'player2') {
      coverPlayer1.style.display = 'none'
      coverPlayer2.style.display = 'initial'
    } else if (player === 'player1') {
      coverPlayer1.style.display = 'initial'
      coverPlayer2.style.display = 'none'
    }
  }

  static createElement (tag, className, elementId, appendTo) {
    const element = document.createElement(tag)
    if (className) element.className = className
    if (elementId) element.id = elementId
    if (appendTo) appendTo.append(element)
    return element
  }

  static resetInputFieldsPosition () {
    const inputFields = document.querySelectorAll('.input-position')

    for (const field of inputFields) {
      field.value = ''
    }
  }
}
