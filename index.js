const player = document.querySelector('[data-player]')
const blocks = [...document.getElementsByClassName('block')]
const winningText = document.getElementsByClassName('winningText')
let hasWon = false

function checkWinner(dataPlayer) {

  var gameValues = blocks.map((block) => {
    return block.innerText
  })
  var horizontal = Boolean(gameValues[0]) && gameValues[0] === gameValues[1] &&
    gameValues[0] === gameValues[2]
  var horizontal2 = Boolean(gameValues[3]) && gameValues[3] === gameValues[4] &&
    gameValues[3] === gameValues[5]
  var horizontal3 = Boolean(gameValues[6]) && gameValues[6] === gameValues[7] &&
    gameValues[6] === gameValues[8]

  var vertical1 = Boolean(gameValues[0]) && gameValues[0] === gameValues[3] &&
    gameValues[0] === gameValues[6]
  var vertical2 = Boolean(gameValues[1]) && gameValues[1] === gameValues[4] &&
    gameValues[1] === gameValues[7]
  var vertical3 = Boolean(gameValues[2]) && gameValues[2] === gameValues[6] &&
    gameValues[2] === gameValues[8]

  var dar1 = Boolean(gameValues[0]) && gameValues[0] === gameValues[4] &&
    gameValues[0] === gameValues[8]
  var dar2 = Boolean(gameValues[2]) && gameValues[2] === gameValues[4] &&
    gameValues[2] === gameValues[6]
  if (horizontal || horizontal2 || horizontal3 || vertical1 || vertical2 ||
    vertical3 || dar1 || dar2) {
    winningText[0].innerText =  `player ${dataPlayer} have won the game`
    hasWon = true
  }
}

blocks.forEach(block => {
  block.addEventListener('click', (event) => {
    if (hasWon) {
      return
    }
    // const player = document.getElementById("box1")
    const dataPlayer = player.getAttribute('data-player')
    if (dataPlayer == 'o') {
      event.target.innerText = 'o'
      player.setAttribute('data-player', 'x')

    } else {
      event.target.innerText = 'x'
      player.setAttribute('data-player', 'o')

    }
    checkWinner(dataPlayer)
  })
})

const resetButton = document.getElementById('resetButton')

resetButton.addEventListener('click', () => {
  player.setAttribute('data-player', 'o')
  blocks.forEach(block => {
    block.innerText = ''

  })
  winningText[0].innerText = ' '
  hasWon = false
})

