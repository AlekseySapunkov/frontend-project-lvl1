import readlineSync from 'readline-sync';

import getRandomInt from './random.js';

export default function evenCalculate() {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  const greetingOfPlayer = `Hello, ${playerName}!`;
  console.log(greetingOfPlayer);
  console.log('Answer \"yes\" if the number is even, otherwise answer \"no\"');
  let counter = 0;
  while (counter < 3) {
    const randomNumber = getRandomInt(0, 100);
    console.log(`Question: ${randomNumber}`);
    const answerOfPlayer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0 && answerOfPlayer === 'yes') {
      console.log('Correct!');
      counter += 1;
  }
    else if (randomNumber % 2 !== 0 && answerOfPlayer === 'no') {
      console.log('Correct!');
      counter += 1;
  }
    else if (randomNumber % 2 === 0 && answerOfPlayer !== 'yes') {
      console.log(`'${answerOfPlayer}' is wrong answer ;( Correct answer was 'yes'\nLet's try again, ${playerName}!`);
      break;
    }
    else {
      console.log(`'${answerOfPlayer}' is wrong answer ;( Correct answer was 'no'\nLet's try again, ${playerName}!`);
      break;
    }
  }
  if (counter >= 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
}
