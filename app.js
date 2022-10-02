const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0

startBtn.addEventListener('click' ,  (event) =>{
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click' , event=>{
    if (event.target.classList.contains('time-btn'))
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
})

board.addEventListener('click', event =>{
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

// DEBUG
// startGame()

function startGame() {
    setInterval(dereaseTime , 1000)
    setTime(time)
    createRandomCircle()
    // timeEl.innerHTML = `00:${time}`
}

function dereaseTime() {
    if (time === 0) {
        finishGame()
    } else{
        let = current = --time
        if (current < 10){
            current = `0${current}`
        }
        // timeEl.innerHTML = `00:${current}`
        setTime(current)
    }

}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1 class="result">Cчёт: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(30 , 60)
    const {width , height} =  board.getBoundingClientRect()
    const y = getRandomNumber(0, width - size)
    const x = getRandomNumber(0, height - size)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    // circle.style.width = `40px`
    // circle.style.height = `40px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`
    // circle.style.background = getRandomColor()

    board.append(circle)
}

function getRandomNumber(min , max) {
    return Math.round(Math.random() * (max - min) + min)
}
// function getRandomColor() {
//     return colors[Math.floor(Math.random() * colors.length)]
// }
// const colors = ['red' , 'blue' , 'yellow' , 'green']
