window.onload = () => {
  function notification(){
      alert("Let's play Stone, Paper, Scissors (hope you spell things correctly)")
      alert("The first one to reach 5 points wins!!!\nYou ready?")
      alert("Let's go!!")
  }
  
  function collectInputAndShowScore(humanScore,computerScore){
      const humanChoice=prompt(`Choose your Weapon\nCurrent score: Human: ${humanScore} Computer: ${computerScore}`).toLowerCase();
      if(humanChoice== "rock"||humanChoice=="stone"||humanChoice=="paper"||humanChoice=="scissors"){
          return humanChoice
      }
      else {
          alert("Oops! We think you spelled your weapon wrong. Please try again!")
          collectInputAndShowScore(humanScore,computerScore);
      }
  }
  
  function whoWon(humanChoice,computerChoice){
      let humanWon="Human wins!!!", computerWon="Computer wins!!!";
      if((humanChoice=="stone"||humanChoice=="rock")&&computerChoice==0||humanChoice=="paper"&&computerChoice==1||humanChoice=="scissors"&&computerChoice==2){
          return tie="It's a tie!";
      }
      if(humanChoice =="paper"){
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
  
  
  function keepScore(){
      let humanScore=0, computerScore=0;
      let humanWon ="Human wins!!!", computerWon="Computer wins!!!";
      while(humanScore<5 && computerScore<5){
          console.log(humanScore,computerScore);
          const humanChoice = collectInputAndShowScore(humanScore,computerScore)
          const result=whoWon(humanChoice,computerChoice())
          if(result===humanWon){
              alert(humanWon);
              humanScore++;
          }
          else if(result===computerWon){
              alert(computerWon);
              computerScore++;
          }
          else if(result==tie){
              alert(tie);
          }
          
      }
      humanScore>computerScore?alert("Human wins the match!"):alert("Computer wins the match!")
  }
  
  
  notification();
  keepScore();

}

