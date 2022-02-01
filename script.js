function didHumanWin(humanChoice,computerChoice){
    if(humanChoice=="stone"||humanChoice=="rock"&&computerChoice==0||humanChoice=="papper"&&computerChoice==1||humanChoice=="scissors"&&computerChoice==2){
        return alert("It's a tie!");
    }
    if(humanChoice =="papper"){
        if(computerChoice ==0){
            return alert("Human wins!!!");
        }
        else{
            return alert("Machine wins!!!");
        }
    }
    else if(humanChoice =="rock" || humanChoice=="stone"){
        if(computerChoice ==2){
            return alert("Human wins!!!");
        }
        else{
            return alert("Machine wins!!!");
        }
    }
    else if (humanChoice =="scissors"){
        if(computerChoice==1){
            return alert("Human wins!!!");
        }
        else{
            return alert("Machine wins!!!");
        }
    }
}
function collectInput(){
    return prompt("Let's Play Stone, Papper, Scissors. The first one to score 5 points wins!").toLowerCase();
}
function computerChoice(){
    return Math.floor(Math.random()*3);
}

mychoice=collectInput();
alert(didHumanWin(mychoice,computerChoice()));

while(pointsHuman !=5||pointsComputer !=5){

    alert(didHumanWin(mychoice,computerChoice()));
}
