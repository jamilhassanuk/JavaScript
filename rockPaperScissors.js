const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' ||
        userInput === 'paper' ||
        userInput === 'scissors' ||
        userInput === 'bomb') {
          return userInput;
        } else {
          return `Plese input rock paper or scissors`;
        }
  };
  
  //console.log('User choice: ' + getUserChoice('rock'));
  
  
  const getComputerChoice = () => {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
      return 'rock';
    } else if (rand === 1) {
      return 'paper';
    } else if (rand === 2) {
      return 'scissors';
    } else return 'error in computer choice';
  };
  
  //console.log('Computer Choice: ' + getComputerChoice());
  
  
  const determineWinner = (userChoice, computerChoice) => {
    let computerWin = 'Computer Wins !!!';
    let userWin = 'User wins !!!';
    
    if (userChoice === 'bomb') {
        return 'User wins - BOOOOM!';
    } else if (userChoice === computerChoice) {
      return `Game Tied !!!`;
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return computerWin;
        } else {
            return userWin;
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return computerWin;
        } else {
            return userWin;
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return computerWin;
        } else {
            return userWin;
        }
    }
}
    

const playGame = () => {
  console.log('Rock Paper Scissors ...')
  let userChoice = getUserChoice('bomb');
  console.log('User Choice: ' + userChoice);
  let computerChoice = getComputerChoice();;
  console.log('Comuter Choice: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();




