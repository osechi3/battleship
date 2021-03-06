import PubSub from 'pubsub-js'
import { View } from './View'
import { createElement } from './helpers/helperFunctions'

export class Grid {
  static init () {
    const blockGridPlayer1 = document.getElementById('block-grid1')

    const blockGridPlayer2 = document.getElementById('block-grid2')

    /* Players' names */
    const namePlayer1 =
      createElement('p', 'name', 'block-name1', blockGridPlayer1)
    namePlayer1.textContent = 'Player'

    const namePlayer2 =
      createElement('p', 'name', 'block-name2', blockGridPlayer2)
    namePlayer2.textContent = 'Computer'

    /* Grid */
    const gridPlayer1 =
      createElement('div', 'grid', 'grid-player1', blockGridPlayer1)
    const gridPlayer2 =
      createElement('div', 'grid', 'grid-player2', blockGridPlayer2)

    // Hiding AI grid and the name before starting the game
    gridPlayer2.style.display = 'none'
    namePlayer2.style.display = 'none'

    /* Grid items of the first player */
    for (let item = 0; item < 100; item++) {
      /* Adding a hidden element to check for
      incorrect horizontal positioning */
      if (item !== 0 && item % 10 === 0) {
        createElement('div', 'hidden-item', null, gridPlayer1)
      }

      const gridItem =
        createElement('div', 'grid-item', null, gridPlayer1)

      // Adding hidden elements to the end of the grid to check against
      if (item >= 99) {
        for (let i = 0; i < 10; i++) {
          createElement('div', 'hidden-item', null, gridPlayer1)
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
        createElement('div', 'hidden-item', null, gridPlayer2)
      }

      const gridItem =
        createElement('div', 'grid-item', null, gridPlayer2)

      // Adding hidden elements to the end of the grid to check against
      if (item >= 99) {
        for (let i = 0; i < 10; i++) {
          createElement('div', 'hidden-item', null, gridPlayer1)
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
      gridPlayer2.addEventListener('click', this.enableClickingGridOpponent)
    })

    // Hiding the error message when starting the game
    PubSub.subscribe('clicked_btn_start_game', () => {
      const errorStart = document.getElementById('error-start')
      errorStart.classList.add('hidden')
    })

    /* Update grids after a player has made their turn */
    PubSub.subscribe('attack_is_executed', (msg, data) => {
      this.updateGridPlayer(data.coordinates, data.missedHits, data.player)
    })

    /* Div that doesn't let a player make a turn before
    the other player do so */
    const coverPlayer1 =
      createElement('div', 'cover', 'cover-player1', gridPlayer1)
    const coverPlayer2 =
      createElement('div', 'cover', 'cover-player2', gridPlayer2)

    coverPlayer1.style.display = 'none'
    coverPlayer2.style.display = 'none'

    gridPlayer1.append(coverPlayer1)
    gridPlayer2.append(coverPlayer2)
  }

  static updateGridPlayer (coordinates, missedHits, player) {
    const gridPlayer = document.getElementById(`grid-${player}`)
    const isMissed = missedHits.some(hit => coordinates === hit)

    for (let item = 0; item < 110; item++) {
      if (gridPlayer.childNodes[item].textContent === coordinates) {
        if (isMissed) {
          gridPlayer.childNodes[item].style.backgroundColor = '#DAE7E6'
        } else {
          gridPlayer.childNodes[item].style.backgroundColor = '#F5F749'
        }
      }
    }
  }

  static enableClickingGridOpponent (e) {
    if (e.target.textContent) {
      PubSub.publish('clicked_player2_grid', e.target.textContent)
    }
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
          View.getShipFromDOM(player, shipClasses[0])
        }
      }
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
        element.classList.add(direction)
      })
      element.id = itemId
    } else if (addOrRemove === 'remove') {
      for (const className of element.classList) {
        if (className === 'horizontal' || className === 'vertical') {
          direction = className
        }
      }

      classesArray.forEach(className => {
        element.classList.remove(className)
        element.classList.remove('horizontal')
        element.classList.remove('vertical')
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
      numberRandom = this.getRandomNumber(length, oldCoordinates, iteration)
      return numberRandom
    } else if (isOccupied === true) {
      numberRandom = this.getRandomNumber(length, oldCoordinates, iteration)
      return numberRandom
    } else {
      return numberRandom
    }
  }
}
