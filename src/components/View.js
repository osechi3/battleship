import PubSub from 'pubsub-js'

export class View {
  static init () {
    const rootElement = document.getElementById('app')
    /* Header */
    const header = this.createElement('h1', null, 'header', rootElement)
    header.textContent = 'Battleship'

    /* Grid */
    this.initGrid(rootElement)

    /* Div that doesn't let a player make a turn before
    the other player do so */
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
  }

  static initGrid (rootElement) {
    const gridPlayer1 =
      this.createElement('div', 'grid', 'grid-player1', rootElement)
    const gridPlayer2 =
      this.createElement('div', 'grid', 'grid-player2', rootElement)

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

    PubSub.subscribe('attack_is_executed', (msg, data) => {
      this.updateGridPlayer(data.coordinates, data.missedHits, data.player)
      this.changeTurns(data.player)
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

  static createElement (tag, className, elementId, appendTo = 'body') {
    const element = document.createElement(tag)
    if (className) element.className = className
    if (elementId) element.id = elementId
    appendTo.append(element)
    return element
  }
}
