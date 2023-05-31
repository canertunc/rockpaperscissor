const chocies = ["rock","paper","scissors"];

let scoreOfPlayer = 0;
let scoreOfComputer = 0;

function random() {
    let randomIndex = Math.floor(Math.random() * 3);
    return chocies[randomIndex];
}

function playRound(playerSelection, computerSelection) {

 
    if ((computerSelection == "scissors" && playerSelection == "rock") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "rock" && playerSelection == "paper")) {
        scoreOfPlayer += 1;
        return "PLAYER WON!";
    }
    else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "rock")) {
        scoreOfComputer += 1;
        return "COMPUTER WON!";
    }
    else {
        return "DRAW!";
    }

}

function checkImageAndResult() {
    if (headResult.querySelector("h3") !== null) {
        headResult.querySelector("h3").remove();
    }
    if (imageOfPlayerResult.querySelector("img") !== null || imageOfComputerResult.querySelector("img") !== null){
        imageOfPlayerResult.querySelector("img").remove();
        imageOfComputerResult.querySelector("img").remove();
    }
}

function createImageAndResult(result,choiceOfPlayer,choiceOfComputer) {
    const newResult = document.createElement("h3");
    newResult.textContent = result;
    newResult.className = "result-class";
    headResult.appendChild(newResult);

    const newImageOfPlayer = document.createElement("img");
    const newImageOfComputer = document.createElement("img");
    newImageOfPlayer.src = "./images/"+choiceOfPlayer+".png";
    newImageOfComputer.src = "./images/"+choiceOfComputer+".png";
    newImageOfPlayer.className = "choice-image";
    newImageOfComputer.className = "choice-image";
    newImageOfPlayer.id = "new-player-image";
    newImageOfComputer.id= "new-computer-image";
    imageOfPlayerResult.appendChild(newImageOfPlayer);
    imageOfComputerResult.appendChild(newImageOfComputer);
}

function changeScore(scoreOfPlayer,scoreOfComputer) {
    playerScore.textContent = scoreOfPlayer;
    computerScore.textContent = scoreOfComputer;

}

const headResult = document.querySelector(".head-result");

const rockChoice = document.querySelector("#rock");
const paperChoice = document.querySelector("#paper");
const scissorsChoice = document.querySelector("#scissors");

const imageOfPlayerResult = document.querySelector("#player-result");
const imageOfComputerResult = document.querySelector("#computer-result");

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

const reset = document.querySelector(".reset");
const resetHead = document.querySelector("#reset-head");

var choiceOfPlayer;



rockChoice.addEventListener("click", (e) => {
    checkImageAndResult();

    choiceOfPlayer = "rock";
    choiceOfComputer = random();

    const result = playRound(choiceOfPlayer,choiceOfComputer);
    createImageAndResult(result,choiceOfPlayer,choiceOfComputer);
    changeScore(scoreOfPlayer,scoreOfComputer);

})

paperChoice.addEventListener("click", (e) => {
    checkImageAndResult();
    
    choiceOfPlayer = "paper";
    choiceOfComputer = random();

    const result = playRound(choiceOfPlayer,choiceOfComputer);
    createImageAndResult(result,choiceOfPlayer,choiceOfComputer);
    changeScore(scoreOfPlayer,scoreOfComputer);

})

scissorsChoice.addEventListener("click", (e) => {
    checkImageAndResult();
    
    choiceOfPlayer = "scissors";
    choiceOfComputer = random();

    const result = playRound(choiceOfPlayer,choiceOfComputer);
    createImageAndResult(result,choiceOfPlayer,choiceOfComputer);
    changeScore(scoreOfPlayer,scoreOfComputer);

})

reset.addEventListener("click", (e) => {
    const headResult = document.querySelector(".result-class");
    const image1 = document.querySelector("#new-player-image");
    const image2 = document.querySelector("#new-computer-image");

    scoreOfPlayer = 0;
    scoreOfComputer = 0;
    changeScore(scoreOfPlayer,scoreOfComputer);
    headResult.remove();
    image1.remove();
    image2.remove();
})

rockChoice.addEventListener("mouseover",(e) => {
    rockChoice.style.backgroundColor = "#98FB98";
    rockChoice.style.cursor = "pointer";
})
rockChoice.addEventListener("mouseout",(e) => {
    rockChoice.style.backgroundColor = "#ffff";
})
paperChoice.addEventListener("mouseover",(e) => {
    paperChoice.style.backgroundColor = "#98FB98";
    paperChoice.style.cursor = "pointer";
})
paperChoice.addEventListener("mouseout",(e) => {
    paperChoice.style.backgroundColor = "#ffff";
})
scissorsChoice.addEventListener("mouseover",(e) => {
    scissorsChoice.style.backgroundColor = "#98FB98";
    scissorsChoice.style.cursor = "pointer";
})
scissorsChoice.addEventListener("mouseout",(e) => {
    scissorsChoice.style.backgroundColor = "#ffff";
})
reset.addEventListener("mouseover",(e) => {
    reset.style.backgroundColor = "#FF2400";
    resetHead.style.color = "#ffff";
    reset.style.cursor = "pointer";
})
reset.addEventListener("mouseout",(e) => {
    reset.style.backgroundColor = "#ffff";
    resetHead.style.color = "#FF2400";
})
