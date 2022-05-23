const timeLeft = document.querySelector('#time-left')
const result = document.querySelector('#result')
const startorpause = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')

let currentIndex = 76

const moveFrog = (e) => {
  console.log("Moved")

  switch (e.key) {
    case 'ArrowLeft':
      console.log("Move Left")
      break
    case 'ArrowRight':
      console.log("Move Right")
      break
    case 'ArrowUp':
      console.log("Move Up")
      break
    case 'ArrowDown':
      console.log("Move Down")
  }

  squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)