const player = document.querySelector('[data-player]')
const blocks = [...document.getElementsByClassName('block')]

blocks.forEach(block => {
  block.addEventListener('click', (event) => {

    // const player = document.getElementById("box1")
    const dataPlayer = player.getAttribute('data-player')
    if (dataPlayer == 'o') {
      event.target.innerText = 'o'
      player.setAttribute('data-player', 'x')

    } else {
      event.target.innerText = 'x'
      player.setAttribute('data-player', 'o')

    }
  })
})

const resetButton = document.getElementById('resetButton')

resetButton.addEventListener('click', () => {
  player.setAttribute('data-player', 'o')
  blocks.forEach(block => {
    block.innerText = ''
  })
})

