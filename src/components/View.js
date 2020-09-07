import PubSub from 'pubsub-js'

export class View {
  static init () {
    const blockMain = document.getElementById('block-main')

    /* Draggable ship elements */
    const shipElements = document.querySelectorAll('.ship')
    shipElements.forEach(element => {
      /* Drag Start */
      element.addEventListener('dragstart', (e) => {
        element.id = 'dragged'

        const childrenLength = element.children.length

        e.dataTransfer.setData('text/id', element.id)
        e.dataTransfer.setData(`length/${childrenLength}`, childrenLength)
        e.dataTransfer.effectAllowed = 'move'
      })

      /* Drag End */
      element.addEventListener('dragend', (e) => {
        element.removeAttribute('id')
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
    const buttonStartGame =
      this.createElement('button', 'btn', 'btn-start-game')
    buttonStartGame.type = 'button'
    buttonStartGame.textContent = 'Start Game'

    const blockGrid2 = document.getElementById('block-grid2')
    blockMain.insertBefore(buttonStartGame, blockGrid2)

    buttonStartGame.addEventListener('click', () => {
      PubSub.publish('clicked_btn_start_game')
    })
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

    /* Drop area for draggable ships */
    gridPlayer1.childNodes.forEach(child => {
      /* Drag Enter */
      child.addEventListener('dragenter', (e) => {
        e.preventDefault()
      })

      /* Drag Over */
      child.addEventListener('dragover', (e) => {
        e.preventDefault()

        /* Getting the length */
        const dataType =
          e.dataTransfer.types.find(type => /length\/[0-9]/.test(type))

        this.styleItemsReactively(child, parseInt(dataType.slice(-1)), 'hover')
      })

      /* Drag Leave */
      child.addEventListener('dragleave', (e) => {
        this.styleItemsReactively(child, 4, null, 'hover')
      })

      /* Drop */
      child.addEventListener('drop', (e) => {
        e.preventDefault()
        const draggedId = e.dataTransfer.getData('text/id')

        document.getElementById(draggedId).remove()

        /* Getting the length */
        const dataType =
          e.dataTransfer.types.find(type => /length\/[0-9]/.test(type))

        this.styleItemsReactively(child, parseInt(dataType.slice(-1)), 'placed', 'hover')
        child.classList.remove('hover')

        this.getShipFromDOM()
      })
    })

    /* Update grids and change turns after has made their turn */
    PubSub.subscribe('attack_is_executed', (msg, data) => {
      this.updateGridPlayer(data.coordinates, data.missedHits, data.player)
      this.changeTurns(data.player)
    })
  }

  static styleItemsReactively (element, amount, className, classToRemove) {
    if (!element) return
    if (classToRemove) element.classList.remove(classToRemove)
    if (className) element.classList.add(className)
    if (amount === 1) return

    return this.styleItemsReactively(
      element.nextElementSibling, amount - 1, className, classToRemove
    )
  }

  static getShipFromDOM () {
    const ship = []
    const gridPlayer1 = document.getElementById('grid-player1')
    for (const child of gridPlayer1.children) {
      if (child.classList.contains('placed') &&
        !child.classList.contains('created')) {
        console.log(child.textContent)

        child.classList.add('created')
        ship.push(child.textContent)
      }
    }

    PubSub.publish('got_ship_from_DOM', {
      coordinates: ship[0],
      length: ship.length
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
