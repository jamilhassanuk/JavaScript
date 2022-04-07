// A simple EightBall response game, which uses a swith statment.
// Pre-defined input for Name and question, and a random number to decide
// the response via a switch statement.

let userName = '';

userName ? console.log('Hello ' + userName) : console.log('Hello Human!');

userQuestion = 'Will it rain today?';

console.log('Question: ' + userQuestion);

randomNumber = Math.floor(Math.random() * 8);

let eightBall = randomNumber;

switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
  default:
  eightBall = 'Invalid number!';
  break;
};

console.log(`Answer: ${eightBall}`);



