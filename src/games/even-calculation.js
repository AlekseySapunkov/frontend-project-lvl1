import start from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const makeGame = () => {
  const question = getRandomInt(0, 100);
  let isPrime = true;
  if (question % 2 !== 0) { // Проверяем четность числа
    isPrime = false;
  }
  const answer = isPrime ? 'yes' : 'no';
  return [question, answer];
};

export default function startGame() {
  start(makeGame, description);
}
