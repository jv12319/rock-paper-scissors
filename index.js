let compChoices = ["rock", "paper", "scissors"]
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(array){
    return array[Math.floor(Math.random()*array.length)]
}
let pScore = document.getElementById("pScore");
let cScore = document.getElementById("cScore");
let results = document.getElementById("results");
let rockB = document.getElementById("rockB");
let paperB = document.getElementById("paperB");
let scissorsB = document.getElementById("scissorsB");

rockB.addEventListener("click", function(){
    playerSelection = "rock";
    game();
})

paperB.addEventListener("click", function(){
    playerSelection = "paper";
    game();
})

scissorsB.addEventListener("click", function(){
    playerSelection = "scissors";
    game();
})

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = "Player Score: " + playerScore;
    cScore.textContent = "Computer Score: " + computerScore;
    results.textContent = "Round By Round Result: ";
    document.getElementById("winner").textContent = "Game Winner:";
}


let newGameButton = document.getElementById("newGameButton");
newGameButton.addEventListener("click", resetGame);

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "scissors"){
        let final = "You win!! " + playerSelection + " beats " + computerSelection
        return final
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        let final = "You win!! " + playerSelection + " beats " + computerSelection
        return final
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        let final = "You win!! " + playerSelection + " beats " + computerSelection
        return final
    } else if (playerSelection == computerSelection){
        let final = "Draw! Player chose " + playerSelection + " and Computer chose " + computerSelection
        return final
    } else {
        let final = "Computer wins!! " + computerSelection + " beats " + playerSelection
        return final
    }
}


function game(){
    const computerSelection = getComputerChoice(compChoices);
    let tally = playRound(playerSelection, computerSelection);

    results.textContent = "Round By Round Result: " + tally;

    if (tally.includes("You win")){
        playerScore += 1;
        pScore.textContent = "Player Score: " + playerScore;
    } else if (tally.includes("Computer wins")){
        computerScore += 1;
        cScore.textContent = "Computer Score: " + computerScore;
    } 

    if (playerScore >= 3) {
        document.getElementById("winner").textContent = "Game Winner: " + "You won the game against the Computer!! Congratulations!!"
    } else if (computerScore >= 3) {
        document.getElementById("winner").textContent = "Game Winner: " + "The Computer won the game!! Better luck next time!"
    }
}

function playButtonClick(choice) {
    playerSelection = choice;
    game();
}

