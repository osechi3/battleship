import PubSub from 'pubsub-js'

export class View {
  static init () {
    const blockMain = document.getElementById('block-main')

    /* Ships */
    const shipsInput = document.querySelectorAll('.input-position')
    shipsInput.forEach((shipInput, i, arr) => {
      shipInput.addEventListener('input', () => {
        let sameAsSiblings = false
        let counter = 0
        for (const item of arr) {
          if (item.value === shipInput.value && shipInput.value !== '') {
            counter++

            if (counter > 1) {
              sameAsSiblings = true
              break
            }
          }
        }

        if (!sameAsSiblings) {
          this.changeShipPositionOnGrid(shipInput)
          shipInput.classList.remove('input-invalid')
        } else {
          shipInput.classList.add('input-invalid')
        }
      })

      PubSub.subscribe('invalid_input', (msg, { element, elementId }) => {
        this.checkInvalidInputDynamically(element, elementId)
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

    buttonStartGame
      .addEventListener('click', this.checkInvalidInputOnStartGame)

    /* A container for error messages pertaining the start of the game */
    const containerError = this.createElement('div', 'error hidden', 'error-start', blockStartGame)
    containerError.textContent = 'You can\'t start the game when there are ships positioned incorrectly'
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

      /* Adjusting numbers in divs and casting numbers to strings */
      if (item >= 10) {
        gridItem.textContent = item.toString().split('').reverse().join('')
      } else {
        gridItem.textContent = '' + item + 0
      }
    }

    /* Grid items of the second player */
    for (let item = 0; item < 100; item++) {
      const gridItem =
        this.createElement('div', 'grid-item', null, gridPlayer2)

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

  static changeShipPositionOnGrid (shipInput) {
    const gridPlayer1 = document.getElementById('grid-player1')
    const shipLength = shipInput.parentElement.parentElement.children.length
    const shipId = shipInput.parentElement.parentElement.id

    if (shipInput.value.length > 1) {
      for (const item of gridPlayer1.children) {
        if (shipInput.value === item.textContent) {
          this.styleItemsDynamically(item, shipLength, 'placed', shipId, 'add')
          this.getShipFromDOM()
        }
      }
    } else {
      for (const item of gridPlayer1.children) {
        if (shipId === item.id) {
          this.styleItemsDynamically(item, shipLength, 'created', shipId, 'remove')
          this.styleItemsDynamically(item, shipLength, 'placed', shipId, 'remove')

          PubSub.publish('ship_deleted_from_DOM', shipId)
        }
      }
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

  static checkIfPositionAllowed (element, itemId) {
    if (element.textContent === '') {
      console.log('Not Allowed')
      element.id = itemId
      this.alertUserInvalidInput(element)
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
  static checkInvalidInputDynamically (element, elementId) {
    const currentInputField = document.querySelector(`#${elementId} input`)
    if (element.previousElementSibling.id) {
      console.log(elementId)
      currentInputField.classList.add('input-invalid')
    } else {
      currentInputField.classList.remove('input-invalid')
      element.removeAttribute('id', elementId)
    }
  }

  static checkInvalidInputOnStartGame () {
    const containerError = document.querySelector('#error-start')
    const inputsInvalid = document.querySelectorAll('.input-invalid')
    if (inputsInvalid.length < 1) {
      containerError.classList.add('hidden')
      PubSub.publish('clicked_btn_start_game')
    } else {
      containerError.classList.remove('hidden')
    }
  }

  static alertUserInvalidInput (element) {
    PubSub.publish('invalid_input', {
      element,
      elementId: element.id
    })
  }

  static getShipFromDOM () {
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
      shipId
    })
  }

  static placeShips (player1, player2) {
    const shipsPlayer1 = player1.gameboard.aliveShips
    const gridPlayer1 = document.getElementById('grid-player1')
    const shipsPlayer2 = player2.gameboard.aliveShips
    const gridPlayer2 = document.getElementById('grid-player2')

    shipsPlayer1.forEach(ship => {
      ship.body.forEach(position => {
        for (let item = 0; item < 100; item++) {
          if (position === gridPlayer1.childNodes[item].textContent) {
            gridPlayer1.childNodes[item].style.backgroundColor = 'red'
          }
        }
      })
    })

    shipsPlayer2.forEach(ship => {
      ship.body.forEach(position => {
        for (let item = 0; item < 100; item++) {
          if (position === gridPlayer2.childNodes[item].textContent) {
            gridPlayer2.childNodes[item].style.backgroundColor = 'red'
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
}
