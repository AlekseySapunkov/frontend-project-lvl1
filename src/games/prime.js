import start from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let numberIsPrime = true;
  if (number <= 1) {
    numberIsPrime = false;
  }
  for (let j = 2; j < number; j += 1) {
    if (number % j === 0) {
      numberIsPrime = false;
      break;
    }
  }
  return numberIsPrime;
};

const generateRound = () => {
  const question = getRandomInt(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default function startGame() {
  start(generateRound, description);
}
