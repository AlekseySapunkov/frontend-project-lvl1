import start from '../index.js';
import getRandomInt from '../utils.js';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const question = getRandomInt(2, 100);
  let isPrime = true;
  if (question !== 2) { // логика вычисления простого числа
    for (let j = 2; j < question; j += 1) {
      if (question % j === 0) {
        isPrime = false;
        break;
      }
    }
  const answer = isPrime ? 'yes' : 'no';// выбираем что записать в ответ
  return [question, answer];
  }
};

export default function startGame() {
  start (game, description);
}
