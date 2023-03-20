const form = document.getElementById("form")
let roundsDisplay = document.getElementById("rounds")
let pointsAll = document.getElementById("pointsAll")
const resultCase = document.getElementById("resultCase")
const chooseCom = document.getElementById("comchoose")
const paperButton = document.getElementById("paper")
const stoneButton = document.getElementById("stone")
const scissorsButton = document.getElementById("scissors")
const radioValue = document.querySelector('input[name="runden"]:checked')

let roundsPlayed = 0
let pointsMe = 0
let pointsCom = 0

pointsAll.innerHTML = pointsMe + " : " + pointsCom
const gameStart = (hallo) => {

    const radioValue = document.querySelector('input[name="runden"]:checked').value;
    console.log(hallo)

    if (roundsPlayed < radioValue) {
        roundsPlayed++

        const moves = ["stone", "paper", "scissors"];
        const computerSelection = moves[Math.floor(Math.random() * 3)];

        let result

        if (hallo === computerSelection) {
            result = "tie"
            resultCase.innerHTML = hallo + " (me) " + computerSelection + " (com) " + result
        }

        else if (hallo === "stone" && computerSelection === "scissors" || hallo === "paper" && computerSelection === "stone" || hallo === "scissors" && computerSelection === "paper") {
            result = "you win"
            pointsMe++
            pointsAll.innerHTML = pointsMe + " : " + pointsCom
            resultCase.innerHTML = hallo + " (me) " + computerSelection + " (com) " + result
        }

        else {
            result = "you lost"
            pointsCom++
            pointsAll.innerHTML = pointsMe + " : " + pointsCom
            resultCase.innerHTML = hallo + " (me) " + computerSelection + " (com) " + result
        }

        if (roundsPlayed == radioValue && pointsMe > pointsCom) {
            resultCase.innerHTML = "You win!"

        } else if (roundsPlayed == radioValue && pointsMe < pointsCom) {
            resultCase.innerHTML = "You lost"

        } else if (roundsPlayed == radioValue && pointsMe == pointsCom) {
            resultCase.innerHTML = "nobody wins"
        }
    }
    form.style.display = 'none'
    roundsDisplay.innerHTML = roundsPlayed + " /" + radioValue
}
