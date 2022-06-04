import { amountOfRound, start } from '../index.js';
import getRandomInt from '../utils.js';// логика вычислений рандомных величин

export default function startGame() {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const result = [];
  let question;
  let answer;
  for (let i = 0; i < amountOfRound; i += 1) {
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
      result.push([question, answer]);
    }
  }
  start(result, task);
}
