//test
const rock = document.querySelector('.rock');

const paper = document.querySelector('.paper');

const scissors = document.querySelector('.scissors');

const roundResults = document.querySelector('.compturn');

const scoreUpdate = document.querySelector('.showscore');

const win = document.querySelector('.win');

const compPick = document.querySelector('.pick');

const roundnum = document.querySelector('.roundnum');

function computerPlay(){
    let things = ["rock", "paper", "scissors"]
    let thing = things[Math.floor(Math.random() * things.length)]
    return thing
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return "Player Wins"
    } else if (playerSelection == computerSelection) {
        return "Tie"
    }else{
        return "Computer Wins"
    }
}



function playgame(playerScore, compScore, playerSelection) {
    let computerSelection = computerPlay()
    compPick.textContent = computerSelection

    let winStatus = 0
    let result = playRound(playerSelection, computerSelection)
    if (result == "Player Wins"){
        playerScore++
        roundResults.textContent=(`Player Wins, ${playerSelection} beats ${computerSelection}`) 
    }else if(result == "Tie"){
        roundResults.textContent=(`Tie! both Player and computer selected ${playerSelection}`)

    }else{
        compScore++
        roundResults.textContent=(`Computer Wins, ${playerSelection} Loses to ${computerSelection}`)
    }

    scoreUpdate.textContent= `Computer: ${compScore},  Player: ${playerScore}`;



    if (compScore == 3){
        

        win.textContent= (`COMPUTER WINS FINAL SCORE:  Player: ${playerScore},  Computer: ${compScore}`)
    }else if (playerScore == 3){
        
        win.textContent= (`PLAYER WINS FINAL SCORE:  Player: ${playerScore},  Computer: ${compScore}`)
    }

    return [playerScore, compScore];


}

let playerScore = 0
let compScore = 0
let roundnumber = 0

rock.addEventListener('click', () => {
    console.log("rock has been clicked")

    let scores = playgame(playerScore, compScore, "rock")
    playerScore = scores[0]
    compScore = scores[1]
    roundnumber++
    roundnum.textContent=roundnumber



    
    
        
});

paper.addEventListener('click', () => {
    console.log("paper has been clicked")
    
    let scores = playgame(playerScore, compScore, "paper")
    playerScore = scores[0]
    compScore = scores[1]
    roundnumber++
    roundnum.textContent=roundnumber
        
});

scissors.addEventListener('click', () => {
    console.log("scissors has been clicked")
    let scores = playgame(playerScore, compScore, "scissors")
    playerScore = scores[0]
    compScore = scores[1]
    roundnumber++
    roundnum.textContent=roundnumber
});




