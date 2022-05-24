const timeLeft = document.querySelector('#time-left')
const result = document.querySelector('#result')
const startorpause = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')

let currentIndex = 76
const width = 9

const moveFrog = (e) => {
  squares[currentIndex].classList.remove('frog')
  console.log("Moved")

  switch (e.key) {
    case 'ArrowLeft':
      console.log("Move Left")
      if (currentIndex % width !== 0) {
        currentIndex -= 1
      }
      break
    case 'ArrowRight':
      console.log("Move Right")
      currentIndex += 1
      break
    case 'ArrowUp':
      console.log("Move Up")
      currentIndex -= width
      break
    case 'ArrowDown':
      currentIndex += width
      console.log("Move Down")
  }
  squares[currentIndex].classList.add('frog')

}

document.addEventListener('keyup', moveFrog)