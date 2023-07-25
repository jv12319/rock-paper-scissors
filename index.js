let choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice(choices){
    return choices[Math.floor(Math.random()*choices.length)]
}

//console.log(getComputerChoice(choices))

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors"){
        let result = "You win!! " + playerSelection + " beats " + computerSelection
        return result
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock"){
        let result = "You win!! " + playerSelection + " beats " + computerSelection
        return result
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper"){
        let result = "You win!! " + playerSelection + " beats " + computerSelection
        return result
    } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        let result = "Draw! Player chose " + playerSelection + " and Computer chose " + computerSelection
        return result
    } else {
        let result = "Computer wins!! " + computerSelection + " beats " + playerSelection
        return result
    }
}


function game(){
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Rock Paper or Scissors?");
        const computerSelection = getComputerChoice(choices);
        console.log(playRound(playerSelection, computerSelection));
        console.log("--------")
        if(playRound(playerSelection, computerSelection) == "Player"){
            playerScore++;
        }
        else if(playRound(playerSelection, computerSelection) == "Computer"){
            computerScore++;
        }
    }
    console.log("The game is finished!")
    if(playerScore > computerScore){
        console.log("You won the game!")
    }
    else if(playerScore < computerScore){
        console.log("The computer won the game!")
    }
    else{
        console.log("We have a tie!")
    }
}

game()