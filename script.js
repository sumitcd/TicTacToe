// 0 = Rock; 1 = Paper; 2 = Scissors;

let playerScore = 0;
let cpuScore = 0;
let tieScore = 0

function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

function updateScore(outcome){
    const pscore = document.querySelector("#playerScore");
    const cscore = document.querySelector("#cpuScore");
    const tscore = document.querySelector("#tieScore");

    pscore.textContent = `${playerScore}`;
    cscore.textContent = `${cpuScore}`;
    tscore.textContent = `${tieScore}`;

}

function checkScore(){
    if(playerScore == 5 || cpuScore == 5){
        const resDiv = document.querySelector("#result");
        if(playerScore == 5){
            resDiv.textContent = "You Won!!!";
        }
        else{
            resDiv.textContent = "You Loose!!!";
        }
    }
}

function playRound(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        return -1;
    }
    else if((playerChoice == 0 && computerChoice == 1) ||
            (playerChoice == 1 && computerChoice == 2)||
            (playerChoice == 2 && computerChoice == 0))
    {
        return 0;
    }

    else{
        return 1; //Won
    }

}

function playGame(playerChoice){ 
    let computerChoice = getComputerChoice();

    let outcome = playRound(playerChoice, computerChoice);
    if(outcome == 0){
        cpuScore++;
    }
    else if(outcome == 1){
        playerScore++;
    }
    else{
        tieScore++;
    }
    updateScore();
    checkScore();
}

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");

rockbtn.addEventListener("click", ()=>{
    playGame(0);
});

paperbtn.addEventListener("click", ()=>{
    playGame(1);
});

scissorsbtn.addEventListener("click", ()=>{
    playGame(2);
});

resetBtn.addEventListener("click", ()=>{
    playerScore = 0;
    cpuScore = 0;
    tieScore = 0;
    updateScore();
    const resDiv = document.querySelector("#result");
    resDiv.textContent = "";
});


