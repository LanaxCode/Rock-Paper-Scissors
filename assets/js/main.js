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
            resultCase.innerHTML = hallo + "(me)" + computerSelection + "(com)" + result
        }

        else if (hallo === "stone" && computerSelection === "scissors" || hallo === "paper" && computerSelection === "stone" || hallo === "scissors" && computerSelection === "paper") {
            result = "you win"
            pointsMe++
            pointsAll.innerHTML = pointsMe + " : " + pointsCom
            resultCase.innerHTML = hallo + "(me)" + computerSelection + "(com)" + result
        }

        else {
            result = "you lost"
            pointsCom++
            pointsAll.innerHTML = pointsMe + " : " + pointsCom
            resultCase.innerHTML = hallo + "(me)" + computerSelection + "(com)" + result
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







        // if (roundsPlayed == radioValue) {
        // stoneButton.disabled = true;
        // paperButton.disabled = true;
        // scissorsButton.disabled = true;












// 4 Radio Buttons --> Anzahl runden festlegen
//Anzeige springt zu Anzahl der Runden

//Onclick gibt Value für loop wie häufig gespielt wird ---> value in HTML

// Anzeige oben ändert sich sobald icon gelickt wird 

// zweite Anzeige ändert sich je nach Fall result von Switch Case

//dritte Anzeige zeigt an was gewählt wird und den Gewinner



// unetrschiedliche Farben je nach Fall (Gewonnen, Verloren, Unentschieden)

// restart












// const buttons = document.querySelectorAll('input[type="button"]')
// buttons.forEach((element) => {
//     element.addEventListener("click", (e) => {
//         console.log(element.value)
//         gameStart(element.value)
//     })
// })




    // function playRound(playerSelection, computerSelection) {
    //     for (let index = 0; index <= 5; index++) {
    //         if (playerSelection === computerSelection) {
    //             return "tie";
    //         } else if (
    //             (playerSelection === hallo && computerSelection === "shears") ||
    //             (playerSelection === hallo && computerSelection === "stone") ||
    //             (playerSelection === hallo && computerSelection === "paper")
    //         ) {
    //             playerScore++;
    //             return "win";
    //         } else {
    //             computerScore++;
    //             return "lose";
    //         }
    //     }
    // }
    // playRound()
