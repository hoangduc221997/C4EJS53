const userInput = document.getElementById("user_input")
const startButton = document.getElementById("start")
const stopButton = document.getElementById("stop")
const countDown = document.getElementById("countdown")

var time

startButton.addEventListener('click', () => {
    countDown.innerText = userInput.value
    time = setInterval(() => {
        countDown.innerText -= 1
        if(countDown.innerText < 0){
            clearInterval(time)
            countDown.innerText = "Time is up"
        }
    }, 1000)   
   
}
)

stopButton.addEventListener('click', () => {
    clearInterval(time)
    countDown.innerText = "Stopped"
})