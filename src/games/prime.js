import { roundsCount, start } from '../index.js';
import getRandomInt from '../utils.js';

export default function startGame() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];
  let question;
  let answer;
  for (let i = 0; i < roundsCount; i += 1) {
    question = getRandomInt(2, 100);
    let isPrime = true;
    if (question !== 2) { // логика вычисления простого числа
      for (let j = 2; j < question; j += 1) {
        if (question % j === 0) {
          isPrime = false;
          break;
        }
      }
      answer = isPrime ? 'yes' : 'no';// выбираем что записать в ответ
      rounds.push([question, answer]);
    }
  }
  start(rounds, description);
}
