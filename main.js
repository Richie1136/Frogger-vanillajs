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
      if (currentIndex % width < 8) {
        currentIndex += 1
      }
      break
    case 'ArrowUp':
      console.log("Move Up")
      if (currentIndex - width >= 0) {
        currentIndex -= width
      }
      break
    case 'ArrowDown':
      if (currentIndex + width < width * width) {
        currentIndex += width
      }
      console.log("Move Down")
  }
  squares[currentIndex].classList.add('frog')

}

document.addEventListener('keyup', moveFrog)