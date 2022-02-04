function notification(){
    alert("Let's play Stone, Papper, Scissors (hope you spell things correctly)")
    alert("The first one to reach 5 points wins!!!\nYou ready?")
    alert("Let's go!!")
}

function collectInputAndShowScore(humanScore, computerScore){
    humanChoice=prompt(`Choose your Weapon\nCurrent score: Human: ${humanScore} Computer: ${computerScore}`).toLowerCase();
    if(humanChoice== "rock"||humanChoice=="stone"||humanChoice=="papper"||humanChoice=="scissors"){
        return humanChoice
    }
    else {
        alert("Oops! We think you spelled your weapon wrong. Please try again!")
        collectInputAndShowScore();
    }
}

function didHumanWin(humanChoice,computerChoice){
    let humanWon="Human wins!!!", computerWon="Computer wins!!!";
    if(humanChoice=="stone"||humanChoice=="rock"&&computerChoice==0||humanChoice=="papper"&&computerChoice==1||humanChoice=="scissors"&&computerChoice==2){
        return tie="It's a tie!";
    }
    if(humanChoice =="papper"){
        if(computerChoice ==0){
            return humanWon;
        }
        else{
            return computerWon;
        }
    }
    else if(humanChoice =="rock" || humanChoice=="stone"){
        if(computerChoice ==2){
            return humanWon;
        }
        else{
            return computerWon;
        }
    }
    else if (humanChoice =="scissors"){
        if(computerChoice==1){
            return humanWon;
        }
        else{
            return computerWon;
        }
    }
}
function computerChoice(){
    return Math.floor(Math.random()*3);
}


function game(){
    notification();
    collectInputAndShowScore();
    didHumanWin(humanChoice,computerChoice());

}
game()