const timeLeft = document.querySelector('#time-left')
const result = document.querySelector('#result')
const startorpause = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logLeft = document.querySelectorAll('.log-left')
const logRight = document.querySelectorAll('.log-right')

console.log(logLeft)

let currentIndex = 76
const width = 9

const moveFrog = (e) => {
  squares[currentIndex].classList.remove('frog')
  console.log("Moved")

  switch (e.key) {
    case 'ArrowLeft':
      if (currentIndex % width !== 0) {
        currentIndex -= 1
      }
      break
    case 'ArrowRight':
      if (currentIndex % width < 8) {
        currentIndex += 1
      }
      break
    case 'ArrowUp':
      if (currentIndex - width >= 0) {
        currentIndex -= width
      }
      break
    case 'ArrowDown':
      if (currentIndex + width < width * width) {
        currentIndex += width
      }
  }
  squares[currentIndex].classList.add('frog')

}

document.addEventListener('keyup', moveFrog)

const moveLogsLeft = (logLeft) => {
  switch (true) {
    case logLeft.classList.contains('l1'):
      logLeft.classList.remove('l1')
      logLeft.classList.add('l2')
      break
    case logLeft.classList.contains('l2'):
      logLeft.classList.remove('l2')
      logLeft.classList.add('l3')
      break
    case logLeft.classList.contains('l3'):
      logLeft.classList.remove('l3')
      logLeft.classList.add('l4')
      break
    case logLeft.classList.contains('l4'):
      logLeft.classList.remove('l4')
      logLeft.classList.add('l5')
      break
    case logLeft.classList.contains('l5'):
      logLeft.classList.remove('l5')
      logLeft.classList.add('l1')
      break
  }
}

const moveLogsRight = (logRight) => {
  switch (true) {
    case logRight.classList.contains('l1'):
      logRight.classList.remove('l1')
      logRight.classList.add('l5')
      break
    case logRight.classList.contains('l2'):
      logRight.classList.remove('l2')
      logRight.classList.add('l1')
      break
    case logRight.classList.contains('l3'):
      logRight.classList.remove('l3')
      logRight.classList.add('l2')
      break
    case logRight.classList.contains('l4'):
      logRight.classList.remove('l4')
      logRight.classList.add('l3')
      break
    case logRight.classList.contains('l5'):
      logRight.classList.remove('l5')
      logRight.classList.add('l4')
      break
  }
}

const autoMoveLogs = () => {
  logLeft.forEach(log => {
    moveLogsLeft(log)
  });
  logRight.forEach(log => {
    moveLogsRight(log)
  });
}

setInterval(() => {
  autoMoveLogs()
}, 1000);

autoMoveLogs

