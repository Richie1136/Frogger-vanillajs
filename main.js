const timeLeft = document.querySelector('#time-left')
const result = document.querySelector('#result')
const startorpause = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logLeft = document.querySelectorAll('.log-left')
const logRight = document.querySelectorAll('.log-right')
const carsLeft = document.querySelectorAll('.cars-left')
const carsRight = document.querySelectorAll('.cars-right')


let currentIndex = 76
const width = 9
let timerId;
let time = 20;
let outcomeTimer;

const moveFrog = (e) => {
  squares[currentIndex].classList.remove('frog')

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
    case carsLeft.classList.contains('c1'):
      carsLeft.classList.remove('c1')
      carsLeft.classList.add('c2')
      break
    case carsLeft.classList.contains('c2'):
      carsLeft.classList.remove('c2')
      carsLeft.classList.add('c3')
      break
    case carsLeft.classList.contains('c3'):
      carsLeft.classList.remove('c3')
      carsLeft.classList.add('c1')
      break
  }
}

const moveCarsRight = (carsRight) => {
  switch (true) {
    case carsRight.classList.contains('c1'):
      carsRight.classList.remove('c1')
      carsRight.classList.add('c3')
      break
    case carsRight.classList.contains('c2'):
      carsRight.classList.remove('c2')
      carsRight.classList.add('c1')
      break
    case carsRight.classList.contains('c3'):
      carsRight.classList.remove('c3')
      carsRight.classList.add('c2')
      break
  }
}

const autoMoveLogs = () => {
  time--
  timeLeft.innerHTML = time
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
const lose = () => {
  if (
    squares[currentIndex].classList.contains('c1') ||
    squares[currentIndex].classList.contains('l4') ||
    squares[currentIndex].classList.contains('l5') ||
    time <= 0) {
    result.textContent = "You Lose"
    clearInterval(timerId)
    clearInterval(outcomeTimer)
    squares[currentIndex].classList.remove('frog')
    document.removeEventListener('keyup', moveFrog)
  }
}

const win = () => {
  if (squares[currentIndex].classList.contains('ending-block')) {
    result.innerHTML = "You win"
    clearInterval(timerId)
    clearInterval(outcomeTimer)
  }
}
const checkforloseorwin = () => {
  lose()
  win()
}


startorpause.addEventListener('click', () => {
  if (timerId) {
    clearInterval(timerId)
    clearInterval(outcomeTimer)
    timerId = null
    outcomeTimer = null
    document.removeEventListener('keyup', moveFrog)
  } else {
    timerId = setInterval(() => {
      autoMoveLogs()
      autoMoveCars()
    }, 1000);
    outcomeTimer = setInterval(checkforloseorwin, 50)
    document.addEventListener('keyup', moveFrog)
  }
})