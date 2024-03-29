/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore,activePlayer,dice, gamePlayer,sixNum,winner;


init()


//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


document.querySelector(".btn-roll").addEventListener('click',function(){

  

  if(gamePlayer){
     
    console.log(sixNum)
    //1.random number
    if(sixNum[activePlayer] == 2){
      document.getElementById('score-' + activePlayer).textContent = "0";
      document.getElementById('current-' + activePlayer).textContent = "0";
      sixNum[activePlayer] = 0
      scores[activePlayer] = 0
      roundScore = 0;
      nextPlayer()
    }else{
      dice = Math.floor(Math.random() * 6) + 1
      if(dice == 6){
        sixNum[activePlayer] += 1
      }
    }
  

  //2.Display and result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = 'block';
  diceDOM.src = "dice-" + dice + ".png";

  //3 update the round score if the rolled number was not a 1
  if(dice !== 1){
     roundScore += dice;
     document.querySelector("#current-" + activePlayer).textContent = roundScore;
  }else{
    //next player
    sixNum[activePlayer] = 0
    nextPlayer()

  }

  }
})


document.querySelector(".btn-hold").addEventListener('click',function(){
  if(gamePlayer){
    //Add current score to global score
   scores[activePlayer] += roundScore
   //Update the UI
   document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
 
   //Check if player win the game
 
   if(scores[activePlayer] >= winner){
     document.querySelector("#name-" + activePlayer).textContent = 'Winner';
     document.querySelector('.dice').style.display = 'none';
     document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
     gamePlayer = false;
   }else{
     sixNum[activePlayer] = 0
     nextPlayer()
   }
   //nextPlayer
    //nextPlayer()
  }

})

function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // document.querySelector(".player-0-panel").classList.remove('active');
    // document.querySelector(".player-1-panel").classList.add("active")

    //toogle:
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');

    //diceDOM.style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click',init)

function init(){
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;

  gamePlayer = true;
  sixNum = [0,0]
  //sixNum = 0

  winner = prompt("Hi, How much score you want to setup? ")

document.querySelector(".dice").style.display = 'none'; 

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}