import PubSub from 'pubsub-js'
import { Validation } from './helpers/Validation'

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

    const buttonPlaceHorizontally =
      document.getElementById('button-horizontal-placing')
    buttonPlaceHorizontally.addEventListener('click', () => {
      if (buttonPlaceHorizontally.textContent === 'Horizontal') {
        buttonPlaceHorizontally.textContent = 'Vertical'
      } else {
        buttonPlaceHorizontally.textContent = 'Horizontal'
      }

      this.changeDisplayShipsInDOM()
    })

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
          this.changeShipPositionOnGrid(
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
      if (Validation().checkShipsNotPlacedOnStartGame() === true &&
          Validation().checkInvalidPositionOnStartGame() === true) {
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

      // Adding hidden elements to the end of the grid to check against
      if (item >= 99) {
        for (let i = 0; i < 10; i++) {
          this.createElement('div', 'hidden-item', null, gridPlayer1)
        }
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

      // Adding hidden elements to the end of the grid to check against
      if (item >= 99) {
        for (let i = 0; i < 10; i++) {
          this.createElement('div', 'hidden-item', null, gridPlayer1)
        }
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

  static changeShipPositionOnGrid (shipInput, player, shipClasses) {
    const gridPlayer1 = document.getElementById('grid-player1')
    const shipLength = shipInput.parentElement.parentElement.children.length
    const shipId = shipInput.parentElement.parentElement.id

    for (const item of gridPlayer1.children) {
      /* Checking if there are elements with the input id.
        Deleting them if it's the case */
      if (shipId === item.id) {
        this.styleItemsDynamically(
          item,
          shipLength,
          ['created', 'placed'],
          shipId,
          'remove',
          shipClasses[0]
        )
        PubSub.publish('ship_deleted_from_DOM', shipId)
      }
    }

    if (shipInput.value !== '') {
      /* Placing ships on the grid */
      for (const item of gridPlayer1.children) {
        if (shipInput.value === item.textContent) {
          this.styleItemsDynamically(
            item,
            shipLength,
            ['placed'],
            shipId,
            'add',
            shipClasses[0]
          )
          this.getShipFromDOM(player, 'horizontal')
        }
      }
    }
  }

  static placeShipsOnGridRandomly (player) {
    const gridPlayer =
      document.getElementById(`grid-${player.gameboard.player}`)
    const oldCoordinates = []

    for (let i = 10; i >= 1; i--) {
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

      /* Deciding whether the ship will be placed horizontally or vertically */
      const numRandom = Math.floor(Math.random() * 3)
      const verticalOrHorizontal = numRandom > 1 ? 'horizontal' : 'vertical'
      console.log(verticalOrHorizontal)

      coordinates = this.getRandomNumber(length, oldCoordinates)

      /* Adding new coordinates into an array of used coordinates */
      for (let increment = 0; increment < length; increment++) {
        if (verticalOrHorizontal === 'horizontal') {
          oldCoordinates.push(coordinates + (increment * 10))
        } else if (verticalOrHorizontal === 'vertical') {
          oldCoordinates.push(coordinates + increment)
        } else {
          throw new Error('The direction of the ship is undefined')
        }
      }

      /* The counting numbers of the ships placed randomly differs from those
      placed manually. It might be a source of bugs in the future */
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
          this.styleItemsDynamically(
            child,
            length,
            ['placed'],
            shipId,
            'add',
            verticalOrHorizontal
          )
        }
      }

      /* Adding the ships on the grid into aliveShips array */
      PubSub.publish('got_ship_from_DOM', {
        coordinates,
        length,
        shipId,
        player,
        direction: verticalOrHorizontal
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
      if (oldCoordinates.includes(numberRandom + (i * 10 - 10)) ||
          oldCoordinates.includes(numberRandom + (i - 1))) {
        isOccupied = true
        numberRandom = this.getRandomNumber(length, oldCoordinates, iteration)
        break
      } else {
        isOccupied = false
      }
    }
    /* Checking if the value can NOT be placed onto the grid */
    if (parseInt((numberRandom + '')[1]) + length - 1 >= 10 || // vertically
        (numberRandom < 10 && numberRandom + length - 1 >= 10) || // vertically
        (numberRandom + (length * 10 - 10) >= 100 && length !== 1)) { // horizontally
      console.log(oldCoordinates)
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

  static styleItemsDynamically (
    element,
    amount,
    classesArray,
    itemId,
    addOrRemove,
    direction
  ) {
    if (!element) return

    if (addOrRemove === 'add') {
      classesArray.forEach(className => {
        element.classList.add(className)
      })
      element.id = itemId
    } else if (addOrRemove === 'remove') {
      classesArray.forEach(className => {
        element.classList.remove(className)
      })
      element.removeAttribute('id', itemId)
    }

    if (amount === 1) return

    if (direction === 'horizontal') {
      return this.styleItemsDynamically(
        element.nextElementSibling,
        amount - 1,
        classesArray,
        itemId,
        addOrRemove,
        direction
      )
    } else if (direction === 'vertical') {
      let elementBelow

      const elementCoordinatesBelow =
        element.textContent[0] + ((parseInt(element.textContent[1]) + 1))

      /* Finding the element with the coordinates */
      for (const child of element.parentElement.children) {
        if (child.textContent === elementCoordinatesBelow + '') {
          elementBelow = child
        }
      }

      return this.styleItemsDynamically(
        elementBelow,
        amount - 1,
        classesArray,
        itemId,
        addOrRemove,
        direction
      )
    }
  }

  static getShipFromDOM (player, direction) {
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

    for (let item = 0; item < 110; item++) {
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
