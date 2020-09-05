import PubSub from 'pubsub-js'

export class View {
  static init () {
    const rootElement = document.getElementById('app')
    /* Header */
    const header = this.createElement('h1', null, 'header', rootElement)
    header.textContent = 'Battleship'

    /* Grid */
    this.initGrid(rootElement)
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

    /* Event listener */
    gridPlayer2.addEventListener('click', (e) => {
      console.log(e.target.textContent)
      PubSub.publish('clicked_player2_grid', e.target.textContent)
    })

    gridPlayer1.addEventListener('click', (e) => {
      console.log(e.target.textContent)
      PubSub.publish('clicked_player1_grid', e.target.textContent)
    })

    PubSub.subscribe('attack_is_executed', (msg, data) => {
      this.updateGridPlayer(data.coordinates, data.missedHits, data.player)
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

  static createElement (tag, className, elementId, appendTo = 'body') {
    const element = document.createElement(tag)
    if (className) element.className = className
    if (elementId) element.id = elementId
    appendTo.append(element)
    return element
  }
}
