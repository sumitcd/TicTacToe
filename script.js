// 0 = Rock; 1 = Paper; 2 = Scissors;
function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 0 && computerSelection == 1){
        return 0;
    }
    else if(playerSelection == 0 && computerSelection == 2){
        return 1;
    }
    else if(playerSelection == 1 && computerSelection == 0){
        return 1;
    }
    else if(playerSelection == 1 && computerSelection == 2){
        return 0;
    }
    else if(playerSelection == 2 && computerSelection == 0){
        return 0;
    }
    else if(playerSelection == 2 && computerSelection == 1){
        return 1;
    }
    else{
        return -1; //Tie
    }
}

function playGame(){    
    let playerScore = 0;
    let computerScore = 0;
    for(let round = 0; round <5; round++){
        let playerInput = prompt("Choose Rock, Paper, Scissors");
        playerInput = playerInput.toLowerCase();
        if(playerInput == "rock") playerSelection = 0;
        else if(playerInput == "paper") playerSelection = 1;
        else playerSelection = 2;

        let computerSelection = getComputerChoice();

        let outcome = playRound(playerSelection, computerSelection);

        if(outcome == 0){
            computerScore++;
        }
        else if(outcome == 1){
            playerScore++;
        }
    }
    if(playerScore > computerScore){
        console.log("You Won!");
    }
    else if(playerScore < computerScore){
        console.log("You Lose!");
    }
    else{
        console.log("It's a Tie!");
    }
}

playGame();
