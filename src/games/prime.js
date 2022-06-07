import start from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let isPrime = true;
  if (number === 2) {
    isPrime = false;
  };
  for (let j = 2; j < number; j += 1) {
      if (number % j === 0) {
        isPrime = false;
        break;
      }
    }
  return isPrime;
  };

const game = () => {
  const question = getRandomInt(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';// выбираем что записать в ответ
  return [question, answer];
};

export default function startGame() {
  start(game, description);
}
