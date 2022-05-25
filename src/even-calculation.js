import readlineSync from 'readline-sync';

import greeting from '../src/cli.js';

import getRandomInt from '../src/random.js';

export default function evenCalculate() {
  greeting();
  console.log(`Answer "yes" if the number is even, otherwise answer "no"`);
  let counter = 0;
  while (counter < 3) {
    const randomNumber = getRandomInt(0, 100);
    console.log(`Question: ${randomNumber}`);
    const answerOfPlayer = readlineSync.question('Your answer: ');
    if(randomNumber%2 === 0 && answerOfPlayer === 'yes'){
        console.log('Correct!');
        counter +=1;
    }
    else if (randomNumber%2 !== 0 && answerOfPlayer === 'no'){
    console.log('Correct!');
    counter +=1;
    }
    else {
        console.log (`${answerOfPlayer}`)
    }
  }
}
