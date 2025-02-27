function pickComputerMove(){
  const randomNum = Math.random();

  if (randomNum >= 0 && randomNum <= 1/3){
    ComputerMove = 'rock';
  } else if(randomNum >= 1/3 && randomNum < 2/3){
    ComputerMove = 'paper';
  } else if(randomNum >= 2/3 && randomNum < 1) {
    ComputerMove='scissors';
  }
  return ComputerMove;
}

function auto_play(){
  if(!isAutoPlay){
    intervaID = setInterval(function() {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlay = true;
  }
  else{
    clearInterval(intervaID);
    isAutoPlay = false;
  }
}

function playGame(playerMove){

  computerMove = pickComputerMove();

  if(playerMove === 'rock'){
    if(computerMove === 'rock'){
    result ='Tie!';
    } else if(computerMove === 'paper'){
      result = 'You lost!';
    } else if(computerMove === 'scissors'){
      result = 'You win!'
    }
  }

  else if (playerMove === 'paper'){
    if(computerMove === 'rock'){
      result ='You win!';
    } else if(computerMove === 'paper'){
      result = 'Tie';
    } else if(computerMove === 'scissors'){
      result = 'You lost!'
    }
  }

  else if (playerMove === 'scissors'){
    if(computerMove === 'rock'){
    result ='You lost!';
    } else if(computerMove === 'paper'){
      result = 'You win!';
    } else if(computerMove === 'scissors'){
      result = 'Tie';
    }
  }

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

playerDisplay.textContent = `PLAYER: ${(playerMove.toUpperCase())}`;
computerDisplay.textContent = `COMPUTER: ${(ComputerMove.toUpperCase())}`;
resultDisplay.textContent = result;

let win = +localStorage.win || 0;
let lose = +localStorage.lose || 0;
let tie = +localStorage.tie || 0;

if (result === 'You win!'){
  win += 1;
} else if(result === 'You lost!'){
  lose += 1;
} else if(result === 'Tie'){
  tie += 1;
}
localStorage.win = win;
localStorage.lose = lose;
localStorage.tie = tie;

document.getElementById("win_score").innerHTML = `Win ${win}`;
document.getElementById("tie_score").innerHTML = `Tie ${tie}`;
document.getElementById("loose_score").innerHTML = `Loose ${lose}`;

const resetbut = document.getElementById("reset_but");
resetbut.addEventListener("click", function(){
  localStorage.clear();
  console.log('Local storage was reset!');

  location.reload();
})

}

