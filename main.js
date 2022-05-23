const timeLeft = document.querySelector('#time-left')
const result = document.querySelector('#result')
const startorpause = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')

let currentIndex = 76

const moveFrog = () => {
  console.log("Moved")
  squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)