const timeLeft = document.querySelector('#time-left')
const result = document.querySelector('#result')
const startorpause = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logLeft = document.querySelectorAll('.log-left')
const logRight = document.querySelectorAll('.log-right')
const carsLeft = document.querySelectorAll('.cars-left')
const carsRight = document.querySelectorAll('.cars-right')


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


const moveCarsLeft = (carsLeft) => {
  switch (true) {
    case carsLeft.classList.contains('l1'):
      carsLeft.classList.remove('l1')
      carsLeft.classList.add('l2')
      break
    case carsLeft.classList.contains('l2'):
      carsLeft.classList.remove('l2')
      carsLeft.classList.add('l3')
      break
    case carsLeft.classList.contains('l3'):
      carsLeft.classList.remove('l3')
      carsLeft.classList.add('l4')
      break
    case carsLeft.classList.contains('l4'):
      carsLeft.classList.remove('l4')
      carsLeft.classList.add('l5')
      break
    case carsLeft.classList.contains('l5'):
      carsLeft.classList.remove('l5')
      carsLeft.classList.add('l1')
      break
  }
}

const moveCarsRight = (carsRight) => {
  switch (true) {
    case carsRight.classList.contains('l1'):
      carsRight.classList.remove('l1')
      carsRight.classList.add('l5')
      break
    case carsRight.classList.contains('l2'):
      carsRight.classList.remove('l2')
      carsRight.classList.add('l1')
      break
    case carsRight.classList.contains('l3'):
      carsRight.classList.remove('l3')
      carsRight.classList.add('l2')
      break
    case carsRight.classList.contains('l4'):
      carsRight.classList.remove('l4')
      carsRight.classList.add('l3')
      break
    case carsRight.classList.contains('l5'):
      carsRight.classList.remove('l5')
      carsRight.classList.add('l4')
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

const autoMoveCars = () => {
  carsLeft.forEach(car => {
    moveCarsLeft(car)
  });
  carsRight.forEach(car => {
    moveCarsRight(car)
  });
}

setInterval(() => {
  autoMoveLogs()
  autoMoveCars()
}, 1000);



